<template>
  <div id="app">
    <Form @onChange="updateStyle" />
    <Container :styles="containerStyles" />
  </div>
</template>

<script>
import Form from "./components/form/Form.vue";
import Container from "./components/flex/Container.vue";

export default {
  name: "app",
  data() {
    return {
      containerStyles: {}
    };
  },
  components: {
    Form,
    Container
  },
  methods: {
    updateStyle(newStyle) {
      this.containerStyles = newStyle;
    }
  }
};
</script>

<style>
* {
  font-family: "Oswald", sans-serif;
}

:root {
  --color-red: #fa3605;
  --color-blue: #3482cb;
  --color-blue-alt: #7db4e7;
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
  margin: 20px;
}
</style>
