<template>
  <section>
    <TheHeader/>
    <the-info-banner
    :currentApplicationNBR="12">
    </the-info-banner>
    <section class="main__content">
      <Home/>
      <SidePanel/>
    </section>
  </section>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheInfoBanner from "./components/layout/TheInfoBanner.vue";
import SidePanel from "./components/sidepanel/SidePanel.vue";

//Temporary
import Home from "./pages/Home.vue";

export default {
  components: {
    TheHeader,
    TheInfoBanner,
    Home,
    SidePanel,
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

.main__content {
  display: flex;
  justify-content: center;
  align-items: top;
  gap: 1rem;
}
</style>
