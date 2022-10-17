<template>
  <div class="wrap-list">
    <main
      class="flex min-h-screen bg-blue-400 lg:bg-gradient-to-r from-teal-400 to-blue-400"
    >
      <transition-group
        name="list"
        tag="div"
        class="sm:flex items-start w-screen px-4 py-10 overflow-x-auto"
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
        />

        <ListCreateForm @new-list="addNewList($event, lists)" key="0" />
      </transition-group>
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

import ListTrulo from '@/views/list/components/ListTrulo'
import ListCreateForm from '@/views/list/components/ListCreateForm'

import { data } from '@/views/list/data'
import { addNewList, editListName } from '@/views/list/lists'
import { addNewCard, deleteCard, editCard } from '@/views/list/cards'

export default {
  components: {
    ListCreateForm,
    ListTrulo,
  },
  setup() {
    const lists = ref(data)
    const overlay = ref(false)

    onMounted(() => {
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

    const consol = () => {
      console.log('bu')
    }

    return {
      lists,
      overlay,
      addNewList,
      addNewCard,
      editListName,
      editCard,
      consol,
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