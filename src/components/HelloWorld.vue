<template>
  <div class="hello">
    <h1 @click="showDialog">{{ msg }}</h1>
    <widget :vis="visible" @close="closeDialog"></widget>
  </div>
</template>

<script>
import widget from "./widget/templ";
export default {
  name: "HelloWorld",
  components: { widget },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      visible: false
    };
  },
  methods: {
    showDialog() {
      this.visible = true;
    },
    closeDialog(){
      this.visible = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
