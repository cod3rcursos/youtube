<template>
  <div class="container" :style="styles.container">
    <Item label="1" padding="20" :styles="this.styles.item1" />
    <Item label="2" padding="30" :styles="this.styles.item2" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <div :class="axisClass"></div>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  props: ["styles"],
  components: { Item },
  computed: {
    axisClass() {
      const c = this.styles.container || {}
      const fd = c.flexDirection
      switch(fd.toLowerCase()) {
        case "column": return "main-axis-column"
        case "column-reverse": return "main-axis-column reverse"
        case "row": return "main-axis"
        case "row-reverse": return "main-axis reverse"
        default: return "main-axis"
      }
    }
  }
};
</script>

<style>
.container {
  position: relative;
  display: flex;
  flex: 1;
  border: 5px solid #000;
  background-color: var(--color-blue);
}

.main-axis {
  position: absolute;
  background-image: url('../../assets/arrow.png');
  background-size: contain;
  background-color: var(--color-blue-alt);
  align-self: center;
  width: 100%;
  height: 20px;
}

.main-axis.reverse {
  transform: rotate(180deg);
}

.main-axis-column {
  position: absolute;
  background-image: url('../../assets/arrow_alt.png');
  background-size: contain;
  background-color: var(--color-blue-alt);
  left: calc(50% - 10px);
  width: 20px;
  height: 100%;
}

.main-axis-column.reverse {
  transform: rotate(180deg);
}
</style>