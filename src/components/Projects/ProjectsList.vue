<template>
    <main>
        <ul class="projects__list">
            <li class="projects__item" v-for="project in projects" :key="project">
                <base-project 
                :title="project.title" 
                :description="project.description" 
                :skills="project.skills"
                :link="project.link"
                :repository="project.repository"></base-project>
            </li>  
        </ul>    
    </main>    
</template>

<script>
export default {
    props: ['projects']
}
</script>

<style scoped>

main {
    width: 80rem;
    margin: 0 auto;
}

.projects__list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
    justify-content: center;
}

.projects__item {
    background-color: rgb(43, 43, 43);
    color: white;
    padding:1rem;
    width: 25rem;
    height: 100%;
}
</style>