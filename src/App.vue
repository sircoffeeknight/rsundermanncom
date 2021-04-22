<template>
  <TheHeader/>
  <the-info-banner
  :currentApplicationNBR="12">
  </the-info-banner>
  <Home/>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheInfoBanner from "./components/layout/TheInfoBanner.vue";

//Temporary
import Home from "./pages/Home.vue";

export default {
  components: {
    TheHeader,
    TheInfoBanner,
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
}

.branding__color__bright {
  color: orangered;
}
</style>
