<template>
    <div v-if="visible">
        Tadaaaaaaaaaa <button @click="() => close()">X</button>
    </div>
</template>

<script>
export default {
  name: 'Simple',
  props: {
    visible: Boolean,
  },
  methods: {
    close () {
      this.$emit('remove', { id: 50 })
    },
  },
}
</script>

<style scoped>

</style>
