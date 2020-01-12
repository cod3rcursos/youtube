<template>
  <div>
    <label>Ativar:</label>
    <input type="checkbox" :value="value" v-model="checked" />
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      checked: false
    };
  },
  watch: {
    checked(newValue) {
      this.$emit("input", newValue);
    }
  }
};
</script>

<style>
</style>