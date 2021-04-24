<template>
  <section>
    <TheHeader/>
    <Home/>
  </section>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import Home from "./pages/Home.vue";

export default {
  components: {
    TheHeader,
    Home,
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
  background-color: rgb(34, 34, 34);
}

.branding__color__bright {
  color: orangered;
}

/*.main__content {
  display: flex;
  justify-content: center;
  align-items: top;
  gap: 1rem;
}*/
</style>
