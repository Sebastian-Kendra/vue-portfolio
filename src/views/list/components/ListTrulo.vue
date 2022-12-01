<template>
  <section class="list">
    <header>
      <h3
        ref="headline"
        :contenteditable="isEditing"
        :class="{ 'shadow-outline': isEditing }"
        @keydown.enter="isEditing = false"
        @blur="saveName"
        @focus="selectCell"
        @click="startEditing"
        class="p-1 font-bold leading-none text-gray-900 outline-none"
      >
        {{ name }}
      </h3>
    </header>

    <transition-group name="card" tag="ul">
      <CardTrulo
        v-for="card in cards"
        :key="card.id"
        :card="card"
        :listId="id"
        class="drag-el"
        draggable="true"
        @dragstart="startDrag($event, card)"
      />
    </transition-group>

    <CardCreateForm :listId="id" />
  </section>
</template>

<script>
import { toRefs, reactive, ref, nextTick } from 'vue'

import CardTrulo from '@/views/list/components/CardTrulo'
import CardCreateForm from '@/views/list/components/CardCreateForm'

export default {
  components: { CardTrulo, CardCreateForm },
  props: {
    name: {
      type: String,
    },
    id: {
      type: Number,
    },
    cards: {
      type: Array,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      isEditing: false,
    })

    const headline = ref(null)

    const startEditing = () => {
      state.isEditing = true
      focusEle(headline.value)
      selectCell()
    }

    const saveName = () => {
      state.isEditing = false
      emit('edit-list-name', {
        id: props.id,
        newName: headline.value.textContent,
      })
    }

    const focusEle = (ele) => {
      nextTick(() => {
        ele.focus()
      })
    }

    //TOTO JE AKOKEBY LISENER KED NASTANE DRAG START
    const startDrag = (evt, card) => {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('item', card)
      window.eventBus.emit('card-moving', {
        cardId: card.id,
        cardLabels: card.labels,
        tagsCard: card.tags,
        textCard: card.text,
        imageCard: card.image,
        listId: props.id,
      })
    }

    const selectCell = () => {
      let cell = headline.value
      let range, selection
      if (document.body.createTextRange) {
        range = document.body.createTextRange()
        range.moveToElementText(cell)
        range.select()
      } else if (window.getSelection) {
        selection = window.getSelection()
        range = document.createRange()
        range.selectNodeContents(cell)
        selection.removeAllRanges()
        selection.addRange(range)
      }
    }

    return {
      ...toRefs(state),
      focusEle,
      startEditing,
      selectCell,
      saveName,
      headline,
      startDrag,
    }
  },
}
</script>

<style scoped>
.card-enter-active,
.card-leave-active {
  transition: all 0.15s;
}

.card-enter-from,
.card-leave-to {
  opacity: 0;
  transform: scale(0.75);
}
</style>
