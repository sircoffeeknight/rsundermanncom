<template>
    <section>
        <nav>
            <div id="nav_logo">
                <h1>Raphael Sundermann</h1>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Curriculum Vitae</a></li>
                <li><a href="#">Portfolio</a></li>
            </ul>
        </nav>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    height: 10rem;
    margin: 0 auto;
    padding: 1rem 1rem 0 1rem;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem 1rem 0 0;
    padding: 2rem;
    background-color: rgba(43, 43, 43, 0.5);
    color: white;
}

ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

li {
    margin: 0 0.5rem;
}

a:active, a:hover, a:visited, a {
    color: white;
    text-decoration: none;
}
</style>