<template>
  <div :style="allStyles" class="item">{{ label }}</div>
</template>

<script>
export default {
  props: ["label", "padding", "styles"],
  computed: {
    allStyles() {
      return {
        padding: `${this.padding}px` || "20px",
        ...this.styles
      };
    }
  }
};
</script>

<style>
.item {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-red);
  color: #fff;
  border: 5px solid #fff;
  margin: 2px;

  font-size: 3rem;
  font-weight: bold;
  z-index: 1;
}
</style>