<template>
  <div>
    <label>flex-wrap:</label>
    <select ref="select" :value="value" @input="$emit('input', $event.target.value)">
      <option>nowrap</option>
      <option>wrap</option>
      <option>wrap-reverse</option>
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