<template>
    <section>
        <nav>
            <div class="nav__logo">
                <h1><span class="branding__color__bright">Raphael</span> Sundermann</h1>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Curriculum Vitae</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    margin: 0 auto;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 80rem;
    margin: 0 auto;
    color: white;
}

.nav__logo > h1 {
    font-size: 2rem;
    color: white;
}

ul {
    list-style: none;
    display: flex;
}

li {
    margin: 0 0.5rem;
}

a:visited, a {
    color: white;
    text-decoration: none;
}

a:active, a:hover {
    color: orangered;
    border-bottom: 1px solid orangered;
}
</style>