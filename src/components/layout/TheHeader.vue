<template>
    <section>
        <nav>
            <div class="branding">
                <h1><span class="branding__color__bright">Raphael</span> Sundermann</h1>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Curriculum Vitae</a></li>
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
    background-color: rgb(34, 34, 34);
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 0 1rem;
    height: 4rem;
    font-family: 'Antonio', sans-serif;
}

nav a, a:visited {
    text-decoration: none;
    color: white;
    transition: 0.5s ease-in-out;
}

nav a:hover {
    color: orangered;
    font-size: 1.7rem;
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
    height: 40rem;
    border-bottom: 3rem solid rgba(43, 43, 43, 1);
}
</style>