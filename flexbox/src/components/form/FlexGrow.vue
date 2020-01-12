<template>
  <div>
    <label>flex-grow:</label>
    <input type="number" :value="value" @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  props: ["value"]
};
</script>

<style>
</style>