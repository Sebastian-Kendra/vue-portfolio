<template>
    <div class="wrap-list">
        <BackTo />
        <main
            class="flex min-h-screen bg-blue-400 lg:bg-gradient-to-r from-teal-400 to-blue-400"
        >
            <transition-group
                name="list"
                tag="div"
                class="flex-wrap sm:flex items-start w-screen px-4 py-10 overflow-x-auto"
            >
                <div
                    v-if="overlay"
                    id="overlay"
                    class="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-10"
                    key="-1"
                ></div>
                <ListTrulo
                    v-for="list in lists"
                    :id="list.id"
                    :cards="list.cards"
                    :key="list.id"
                    :name="list.name"
                    @edit-list-name="editListName($event, lists)"
                    class="drop-zone"
                    @drop="onDrop($event, list.id)"
                    @dragover.prevent
                    @dragenter.prevent
                />

                <ListCreateForm @new-list="addNewList($event, lists)" key="0" />
            </transition-group>
        </main>
    </div>
</template>

<script>
import '@/views/list/assets/list.scss'
import { ref, onMounted } from 'vue'

import ListTrulo from '@/views/list/components/ListTrulo'
import ListCreateForm from '@/views/list/components/ListCreateForm'
import BackTo from '@/components/BackTo.vue'

import { data } from '@/views/list/data'
import { addNewList, editListName } from '@/views/list/lists'
import {
    addNewCard,
    deleteCard,
    editCard,
    addNewLabel,
} from '@/views/list/cards'

export default {
    components: {
        ListCreateForm,
        ListTrulo,
        BackTo,
    },
    setup() {
        const lists = ref(data)
        const overlay = ref(false)
        let movingText = '',
            movingLabels = [],
            movingTags = [],
            movingImage = {}

        const onDrop = (evt, listId) => {
            window.eventBus.emit('card-dropt', listId)

            let listForDrop = lists.value.find((list) => list.id === listId)
            let cardMaxId = listForDrop.cards.length
                ? Math.max(...listForDrop.cards.map((card) => card.id))
                : 0

            listForDrop.cards.push({
                id: cardMaxId + 1,
                text: movingText || '',
                labels: movingLabels || [],
                tags: movingTags || [],
                image: movingImage,
            })

            console.log(listForDrop.cards)
        }

        onMounted(() => {
            window.eventBus.on('label-comming', (event) => {
                addNewLabel(event, lists.value)
            })

            window.eventBus.on('card-moving', (event) => {
                ;(movingText = event.textCard),
                    (movingLabels = event.cardLabels),
                    (movingTags = event.tagsCard),
                    (movingImage = event.imageCard)
                deleteCard(event, lists.value)
            })

            window.eventBus.on('new-card', (event) => {
                addNewCard(event, lists.value)
            })

            window.eventBus.on('edit-card-text', (event) => {
                editCard(event, lists.value)
            })

            window.eventBus.on('delete-card', (event) => {
                deleteCard(event, lists.value)
            })

            window.eventBus.on('toggle-overlay', (event) => {
                overlay.value = event
            })
        })

        return {
            lists,
            overlay,
            addNewList,
            addNewCard,
            addNewLabel,
            editListName,
            editCard,
            onDrop,
        }
    },
}
</script>

<style scoped>
.wrap-list {
    font-size: 80%;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.15s;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: scale(0.75);
}

#overlay {
    transform: scale(1);
}
</style>
