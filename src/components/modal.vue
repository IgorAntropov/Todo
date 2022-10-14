<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div v-click-outside="onClickOutside" class="modal-container">
          <div class="modal-header">
            <slot name="header">

            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">

            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">

            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import vClickOutside from "click-outside-vue3";

export default {
  directives: {
    clickOutside: vClickOutside.directive
  },
  name: "modal",
  emits: [
    'closeModal'
  ],
  methods: {
    onClickOutside() {
      this.$emit('closeModal');
    }
  },
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;

    .modal-container {
      max-width: 1050px;
      width: 90vw;
      max-height: 95vh;
      height: auto;
      margin: 0 auto;
      padding: 20px 30px;
      background-color: white;
      border-radius: 15px;
      box-shadow: 0 0 1px rgba(12, 26, 75, 0.03), 0 4px 20px -2px rgba(50, 50, 71, 0.04);
      transition: all 0.3s ease;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      .modal-header {
        padding: 0 15px;
        height: 64px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      .modal-body {
        padding: 0 20px;
        display: block;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: auto;
        min-height: 370px;
        overflow-y: auto;
      }

      .modal-footer {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 64px;

        :slotted(button) {
          height: 100%;
          width: 100%;
          border: none;
          border-radius: 15px;
          margin: 0 15px;
          cursor: pointer;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 32px;
          padding: 0;
        }
      }
    }
  }
}

:slotted(.title) {
  font-style: normal;
  font-weight: 700;
  font-size: calc(1em + 1vw);
  line-height: 41px;
  color: var(--color-for-title);
}

:slotted(.btn-danger) {
  background-color: red;
  color: white;

  &:hover {
    background-color: rgba(255, 0, 0, 0.5);
  }
}

:slotted(.btn-success) {
  background-color: blue;
  color: white;

  &:hover {
    background-color: rgba(0, 0, 255, 0.5);
  }
}

:slotted(.close-modal) {
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: gray;
  padding: 0;

  i {
    font-size: 36px;
  }
}

@media (max-width: 680px) {
  .modal-mask {
    .modal-wrapper {
      .modal-container {
        max-width: 95vw;
        width: 95vw;
        max-height: 90vh;
        border-radius: 5px;
        padding: 5px;

        .modal-header {
          padding: 5px;
        }
      }
    }
  }
}
</style>