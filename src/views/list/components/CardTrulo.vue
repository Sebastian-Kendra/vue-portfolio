<template>
  <li :class="{ 'z-20': isPopped }" class="card relative">
    <div class="relative">
      <button
        class="rounded-full bg-opacity-70 absolute top-0 right-5"
        @click.prevent="doPop"
      >
        <svg
          class="pencil"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
          />
        </svg>
      </button>
    </div>
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

    return {
      ...toRefs(state),
      doPop,
      undoPop,
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

.rounded-full {
  border: 1px solid #797979ba;
  border-radius: 5px;
  padding: 5px;
  color: #e4e4e7;
  margin-top: 5px;
}

.right-5 {
  right: 5px;
  background: #acacac6d;
}

.pencil {
  width: 15px;
}

.outline-none {
  padding-right: 25px;
}
</style>
