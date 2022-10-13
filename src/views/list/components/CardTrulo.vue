<template>
  <li
    @contextmenu.prevent="doPop"
    :class="{ 'z-20': isPopped }"
    class="card relative"
  >
    <CardImage :image="card.image" />
    <div class="p-3">
      <CardLabels :labels="card.labels" />
      <p
        ref="cardText"
        :contenteditable="isEditing"
        :class="{ 'shadow-outline': isEditing }"
        @keydown.enter="saveText"
        class="outline-none"
      >
        {{ card.text }}
      </p>

      <CardTags :tags="card.tags" />
      <transition name="poppup">
        <CardPopup
          v-if="isPopped"
          @close-popup="undoPop"
          @start-edit="startEditing"
          :listId="listId"
          :card="card"
        />
      </transition>
    </div>
  </li>
</template>

<script>
import { reactive, toRefs, ref, nextTick } from 'vue'
import CardTags from './CardTags.vue'
import CardImage from './CardImage.vue'
import CardLabels from './CardLabels.vue'
import CardPopup from './CardPopup.vue'

export default {
  props: {
    card: {
      type: Object,
    },
    listId: {
      type: Number,
    },
  },
  // eslint-disable-next-line no-unused-vars
  setup(props) {
    const state = reactive({
      isPopped: false,
      isEditing: false,
    })

    const doPop = () => {
      state.isPopped = true
      window.eventBus.emit('toggle-overlay', true)
      window.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && state.isPopped) {
          state.isPopped = false
          window.eventBus.emit('toggle-overlay', false)
        }
      })
    }

    const undoPop = () => {
      state.isPopped = false
      window.eventBus.emit('toggle-overlay', false)
    }

    const cardText = ref(null)

    const saveText = () => {
      state.isEditing = false
      window.eventBus.emit('edit-card-text', {
        cardId: props.card.id,
        listId: props.listId,
        newText: cardText.value.textContent,
      })

      undoPop()
    }

    const startEditing = () => {
      state.isEditing = true
      nextTick(() => {
        cardText.value.focus()
      })
      selectCell()
    }

    const selectCell = () => {
      let cell = cardText.value
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

    const consol = () => {
      console.log('bu')
    }

    return {
      ...toRefs(state),
      doPop,
      undoPop,
      consol,
      saveText,
      startEditing,
      selectCell,
      cardText,
    }
  },
  components: { CardTags, CardImage, CardLabels, CardPopup },
}
</script>

<style scoped>
.poppup-enter-active,
.poppup-leave-active {
  transition: all 0.15s;
}

.poppup-enter-from,
.poppup-leave-to {
  opacity: 0;
  transform: translateX(-25%);
}
</style>
