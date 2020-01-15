<template>
    <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
            <button @click="() => closeModal()" type="button" aria-label="Close" class="close">×</button>
            <div class="modal-header">
                <slot name="modal-header"></slot>
            </div>
            <div class="modal-container">
                <slot name="modal-container">
                    My Content
                </slot>
            </div>
            <div class="modal-footer">
                <slot name="modal-footer">

                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    showModal: Boolean,
  },
  methods: {
    closeModal () {
      this.$emit('onClose')
    },
  },
}
</script>

<style scoped>
    .modal-header, .modal-container {
        border-bottom: 1px solid #c2c2c2;
    }
</style>
