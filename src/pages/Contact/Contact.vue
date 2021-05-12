<template>
    <main>
        <section class="contact__choose">
            <div>
                <router-link class="contact__routerB" to="/recruiter"><font-awesome-icon icon="user-secret" size="4x" />Recruiter</router-link>
                <router-link class="contact__routerB" to="/company"><font-awesome-icon icon="building" size="4x" />Company</router-link>
                <router-link class="contact__routerB" to="/others"><font-awesome-icon icon="users" size="4x" />Others</router-link>
            </div>
        </section>
        <router-view></router-view>
        <section class="contact__social">
                <a class="contact__linkedIn" href="https://linkedin.com/in/raphael-sundermann-765606148" target="_blank"><font-awesome-icon :icon="['fab' ,'linkedin']" size="4x" /></a>
                <a class="contact__twitter" href="https://twitter.com/SirCoffeeKnight" target="_blank"><font-awesome-icon :icon="['fab' ,'twitter']" size="4x" /></a>
                <a class="contact__github" href="https://github.com/sircoffeeknight" target="_blank"><font-awesome-icon :icon="['fab' ,'github']" size="4x" /></a>
        </section>
    </main>
</template>

<script>


export default {
    components: {
        
    }
}
</script>

<style scoped>
main {
    width: 80rem;
    margin: 0 auto;
    background-color: rgb(45,45,45);
    padding: 1rem;
    margin-bottom: 1rem;
}

.contact__choose {
    width: 40rem;
    margin-bottom: 1rem;
    margin: 0 auto 1rem auto;
}

.contact__social {
    width: 40rem;
    margin-bottom: 1rem;
    margin: 1rem auto 0 auto;
}

.contact__choose > div, .contact__social {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

.contact__routerB, 
.contact__linkedIn,
.contact__github,
.contact__twitter {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 1rem;
    width: 8rem;
    height: 8rem;
    border-radius: 100%;
    transition: 0.2s ease-in-out;
}

.contact__routerB {
    color: white;
    background-color: orangered;
}

.contact__routerB:hover {
    color: orangered;
    background-color: white;
    transition: 0.2s ease-in-out;
}

.contact__linkedIn {
    color: white;
    background-color: #0a66c2;
}

.contact__linkedIn:hover {
    color: #0a66c2;
    background-color: white;
    transition: 0.2s ease-in-out;
}

.contact__github {
    color: white;
    background-color: #24292e;
}

.contact__github:hover {
    color: #24292e;
    background-color: white;
    transition: 0.2s ease-in-out;
}

.contact__twitter {
    color: white;
    background-color: #1EA1F1;
}

.contact__twitter:hover {
    color: #1EA1F1;
    background-color: white;
    transition: 0.2s ease-in-out;
}

.router-link-active {
    color: orangered;
    background-color: white;
}

.contact__routerB > svg {
    width: 100%;
}

@media only screen and (max-width: 1296px) {
    main {
        width: 100%;
    }
}

@media only screen and (max-width: 656px) {
    .contact__choose, .contact__social {
        width: auto;
    }
}

@media only screen and (max-width: 464px) {
    .contact__routerB, 
    .contact__linkedIn,
    .contact__github,
    .contact__twitter {
        padding: 1rem;
        width: 5rem;
        height: 5rem;
        font-size: 0.6em;
    }
}
</style>