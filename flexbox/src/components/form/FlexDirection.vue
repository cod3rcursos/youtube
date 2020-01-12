<template>
  <div>
    <label>flex-direction:</label>
    <select ref="select" :value="value" @input="$emit('input', $event.target.value)">
      <option>row</option>
      <option>column</option>
      <option>row-reverse</option>
      <option>column-reverse</option>
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