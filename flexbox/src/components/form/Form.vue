<template>
  <div class="form">
    <div class="form-wrapper form-container">
      <FlexDirection v-model="flexDirection" />
      <JustifyContent v-model="justifyContent" />
      <AlignItems v-model="alignItems" />
      <FlexWrap v-model="flexWrap" />
      <AlignContent v-model="alignContent" />
    </div>
    <div class="form-wrapper form-item-1">
      <Activate v-model="useForm1" />
      <FlexGrow v-model="flexGrow1" />
      <AlignSelf v-model="alignSelf1" />
    </div>
    <div class="form-wrapper form-item-2">
      <Activate v-model="useForm2" />
      <FlexGrow v-model="flexGrow2" />
      <AlignSelf v-model="alignSelf2" />
    </div>
    <div class="form-wrapper form-item-3">
      <Activate v-model="useForm3" />
      <FlexGrow v-model="flexGrow3" />
      <AlignSelf v-model="alignSelf3" />
    </div>
  </div>
</template>

<script>
import FlexDirection from "./FlexDirection.vue";
import FlexWrap from "./FlexWrap.vue";
import JustifyContent from "./JustifyContent.vue";
import AlignItems from "./AlignItems.vue";
import AlignContent from "./AlignContent.vue";

import Activate from "./Activate.vue";
import FlexGrow from "./FlexGrow.vue";
import AlignSelf from "./AlignSelf.vue";

export default {
  components: {
    FlexDirection,
    FlexWrap,
    JustifyContent,
    AlignItems,
    AlignContent,
    Activate,
    FlexGrow,
    AlignSelf,
  },
  data() {
    return {
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      alignContent: "flex-start",

      useForm1: false,
      flexGrow1: 0,
      alignSelf1: "flex-start",

      useForm2: false,
      flexGrow2: 0,
      alignSelf2: "flex-start",

      useForm3: false,
      flexGrow3: 0,
      alignSelf3: "flex-start"
    };
  },
  methods: {
    emitChange() {
      this.$emit("onChange", {
        container: {
          flexDirection: this.flexDirection,
          flexWrap: this.flexWrap,
          justifyContent: this.justifyContent,
          alignItems: this.alignItems,
          alignContent: this.alignContent
        },
        item1: this.useForm1
          ? {
              flexGrow: this.flexGrow1,
              alignSelf: this.alignSelf1
            }
          : {},
        item2: this.useForm2
          ? {
              flexGrow: this.flexGrow2,
              alignSelf: this.alignSelf2
            }
          : {},
        item3: this.useForm3
          ? {
              flexGrow: this.flexGrow3,
              alignSelf: this.alignSelf3
            }
          : {}
      });
    }
  },
  updated() {
    this.emitChange();
  },
  created() {
    this.emitChange();
  }
};
</script>

<style>
.form {
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
}

.form,
.form select,
.form input {
  font-size: 1.3rem;
}

.form div {
  margin: 10px;
}

.form-wrapper {
  border-radius: 7px;
  border: 2px solid var(--color-red);
}

.form-wrapper::before {
  display: flex;
  justify-content: center;
  background-color: var(--color-red);
  color: #fff;
  padding: 5px;
}

.form-container {
  border: 2px solid var(--color-blue);
}

.form-container::before {
  background-color: var(--color-blue);
  content: "Flex Container";
}

.form-item-1::before {
  content: "Flex Item 1";
}

.form-item-2::before {
  content: "Flex Item 2";
}

.form-item-3::before {
  content: "Flex Item 3";
}
</style>