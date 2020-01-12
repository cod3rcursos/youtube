<template>
  <div>
    <label>align-content:</label>
    <select ref="select" :value="value" @input="$emit('input', $event.target.value)">
      <option>flex-start</option>
      <option>flex-end</option>
      <option>center</option>
      <option>space-between</option>
      <option>space-around</option>
      <option>stretch</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["value"]
};
</script>

<style>
</style>