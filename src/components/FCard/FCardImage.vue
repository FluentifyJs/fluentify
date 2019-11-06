<template>
  <picture class="f-card-image">
    <source
      media="(min-width: 1084px)"
      :srcset="src"
    >
    <img
      :alt="alt"
      :src="src"
      :srcset="src"
    >
  </picture>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    }
  }
}
</script>

<style>

</style>