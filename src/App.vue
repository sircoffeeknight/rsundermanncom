<template>
  <TheHeader/>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Yeseva One', cursive;
}

body {
  margin: 0;
}

.branding__color__bright {
  color: orangered;
}
</style>
