<template>
    <section>
        <nav>
            <div class="branding">
                <h1><span class="branding__color__bright">Raphael</span> Sundermann</h1>
            </div>
            <ul id="nav__list">
                <li><router-link to="/" @click="menuClose">Home</router-link></li>
                <li><router-link to="/curriculum" @click="menuClose">Curriculum Vitae</router-link></li>
                <li><router-link to="/projects" @click="menuClose">Projects</router-link></li>
                <li><router-link to="/contact" @click="menuClose">Contact</router-link></li>
            </ul>
            <a class="icon" href="javascript:void(0)" @click="navbarMobile"><font-awesome-icon icon="hamburger" /></a>
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
    },
    methods: {
        navbarMobile() {
            let x = document.getElementById("nav__list");
            if(x.className === "responsive") {
                x.className = "";
            } else {
                x.className += "responsive";
            }
        },
        menuClose() {
            let x = document.getElementById("nav__list");
            if(x.className === "responsive") {
                x.className = "";
            }
        }
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

.icon {
    display: none;
}

/* Hero */
.hero {
    background-image: url("../../assets/mountains_background.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    height: 40rem;
    border-bottom: 3rem solid rgba(43, 43, 43, 1);
}

@media only screen and (max-width: 961px) {
    .hero {
        background-image: none;
        height: auto;
        border: none;
    }
}

@media only screen and (max-width: 900px) {
    nav > ul > li {
        display: none;
    }
    .icon {
        display: block;
    }
    nav > ul > .responsive {
        position: relative;
    }
    nav > ul.responsive {
        position: absolute;
        display: block;
        padding: 1rem;
        background-color: rgb(20, 20, 20);
        text-align: left;
        right: 0;
        top: 2rem;
    }

    nav > ul.responsive > li {
        display: block;
        text-align: center;
        margin: 1rem;
    }

    nav a:hover {
        font-size: 1em;
    }

}
</style>