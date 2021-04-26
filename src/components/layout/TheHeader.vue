<template>
    <section>
        <nav>
            <div class="branding">
                <h1><span class="branding__color__bright">Raphael</span> Sundermann</h1>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Curriculum Vitae</a></li>
                <li><a href="#">Projects</a></li>
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
}

/* Nav Area */
nav {
    display: flex;
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
}
</style>