<template>
    <article>
        <div class="projects__item__header"><h2>{{ title }}</h2></div>
        <div class="projects__item__description">{{ description }}</div>
        <div class="projects__item__skill">
            <ul class="projects__item__skill__list">
                <li class="projects__item__skill__item" v-for="skill in skills" :key="skill">{{ skill }}</li>
            </ul>
        </div>
        <div class="projects__item__footer">
            <a v-if="link" :href="link" class="projects__item__button"><h2>Go to Project</h2></a>
            <a v-if="repository" :href="repository" class="projects__item__button_github"><h2>GitHub</h2></a>
        </div>
    </article>
</template>

<script>
export default {
    props: ['title', 'description', 'skills', 'link', 'repository']
}
</script>

<style scoped>
.projects__item__header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    overflow: hidden;
    background-color: rgb(70, 70, 70);
    margin-bottom: 1rem;
}

.projects__item__description {
    margin-bottom: 1rem;
}

.projects__item__skill {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}

.projects__item__skill__list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.2rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.projects__item__skill__item {
    background-color: rgb(70, 70, 70);
    padding: 0.2rem;
}

.projects__item__footer {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}

.projects__item__button, .projects__item__button_github {
    border: none;
    width: 100%;
    color: white;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
}

.projects__item__button {
    color: white;
    background-color: orangered;
    transition: 0.2s ease-in-out;
}

.projects__item__button_github {
    color: white;
    background-color: #2D333B;
    transition: 0.2s ease-in-out;
}

.projects__item__button:hover {
    color: orangered;
    background-color: white;
    transition: 0.2s ease-in-out;
}

.projects__item__button_github:hover {
    color: #2D333B;
    background-color: white;
    transition: 0.2s ease-in-out;
}
</style>