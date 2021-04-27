<template>
  <section>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </section>
</template>

<script>
import Header from "./components/layout/TheHeader.vue";
import Footer from "./components/layout/TheFooter.vue";

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Antonio&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
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
