<template>
    <ProjectsList :projects="projects"/>
</template>

<script>
import ProjectsList from '../components/Projects/ProjectsList.vue';

export default {
    components: {
        ProjectsList,
    },
    data() {
        return {
            projects: [
                {
                    title: 'raphael-sundermann.com',
                    description: 'The Website you are on right now. My online CV.',
                    skills: ['HTML', 'CSS', 'NodeJS', 'VUE/VUE-CLI', 'VUE-Router', 'javaScript'],
                    link: '',
                    repository: 'https://github.com/sircoffeeknight/rsundermanncom'
                },
                {
                    title: 'FinaFix',
                    description: 'The project I am currently working on. FinaFix is a small PHP project. The Idea behind FinaFix is, to allow the user to manage their finances, including depts, and a plan to get out of them. Currently I am deciding if I want to use Symfony or Laravel and if I want to include react or angular.',
                    skills: ['HTML', 'CSS', 'PHP', 'MySQL'],
                    link: '',
                    repository: ''
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>