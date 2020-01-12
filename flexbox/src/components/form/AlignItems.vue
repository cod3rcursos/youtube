<template>
  <div>
    <label>align-items:</label>
    <select ref="select" :value="value" @input="$emit('input', $event.target.value)">
      <option>flex-start</option>
      <option>flex-end</option>
      <option>center</option>
      <option>stretch</option>
      <option>baseline</option>
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