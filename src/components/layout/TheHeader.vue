<template>
    <section>
        <div id="hero">
            <nav>
                <div class="nav__logo">
                    <h1><span class="branding__color__bright">Raphael</span> Sundermann</h1>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Curriculum Vitae</a></li>
                    <li><a href="#">Portfolio</a></li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    height: 30rem;
    margin: 0 auto;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0.5rem;
    color: black;
}

ul {
    list-style: none;
    display: flex;
}

li {
    margin: 0 0.5rem;
}

a:active, a:hover, a:visited, a {
    color: black;
    text-decoration: none;
}

.nav__logo > h1 {
    font-size: 2rem;
}

#hero {
    background: url("../../assets/fox_left.png");
    background-attachment: fixed;
    background-position: top;
    background-size: 50%;
    background-repeat: no-repeat;
    height: 100%;
    padding:0 20rem 0 20rem;
}
</style>