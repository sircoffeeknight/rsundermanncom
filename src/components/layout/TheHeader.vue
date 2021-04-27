<template>
    <section>
        <nav>
            <div class="branding">
                <h1><span class="branding__color__bright">Raphael</span> Sundermann</h1>
            </div>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/curriculum">Curriculum Vitae</router-link></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <div class="hero">
            <MeCard/>
        </div>
    </section> 
</template>

<script>
import MeCard from "../MeCard/MeCard.vue";

export default {
    components: {
        MeCard,
    }
}
</script>

<style scoped>
/* Header Section */

section {
    color: white;
    margin-bottom: 4rem;
}

/* Nav Area */
nav {
    z-index: 1000;
    position: fixed;
    display: flex;
    background-color: rgb(20, 20, 20);
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 0 1rem;
    height: 4rem;
    font-family: 'Antonio', sans-serif;
}

nav a.router-link-active {
    color: orangered;
    border-bottom: 1px solid orangered;
}

nav a, a:visited {
    text-decoration: none;
    color: white;
    border-bottom: 0px solid transparent;
    transition: 0.5s ease-in-out;
}

nav a:hover {
    color: orangered;
    font-size: 1.7rem;
    border-bottom: 1px solid orangered;
    transition: 0.5s ease-in-out;
}

nav > div.branding > h1 {
    font-size: 1.7rem;
    margin: 0 auto;
}

nav > ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    list-style: none;
    font-size: 1.2rem;
}

/* Hero */
.hero {
    background-image: url("../assets/technologie_background.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    height: 40rem;
    border-bottom: 3rem solid rgba(43, 43, 43, 1);
}
</style>