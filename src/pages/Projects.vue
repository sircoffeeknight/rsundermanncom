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
                // {
                //     title: 'FinaFix',
                //     description: 'The project I am currently working on. FinaFix is a small PHP project. The Idea behind FinaFix is, to allow the user to manage their finances, including depts, and a plan to get out of them. Currently I am deciding if I want to use Symfony or Laravel and if I want to include react or angular.',
                //     skills: ['HTML', 'CSS', 'PHP', 'MySQL'],
                //     link: '',
                //     repository: ''
                // },
                // {
                //     title: 'MyDash',
                //     description: 'A Dashboard meant mainly for personal use. Implementation of a selection of different APIs.',
                //     skills: ['HTML', 'CSS', 'PHP', 'Symfony', 'MySQL', 'React', 'javaScript'],
                //     link: '',
                //     repository: ''
                // }
                 {
                    title: 'My-New-World.Space',
                    description: 'Both the Addon and the Bot will be hosted by myself. Both services will use an API as well as an Management Plattform. Both of these will be provided in the final Part of my New World Project. The Website will serve as an display, configuration and information plattform for all users.',
                    skills: ['Symfony', 'MySQL', 'python'],
                    link: 'https://my-new-world.space/',
                    repository: 'https://github.com/sircoffeeknight/nw-space'
                },
                {
                    title: 'New World Addon',
                    description: 'Working on an Addon for the Game made by AGS. The Idea is to provide multiple QoL Features for users. Right now there is no official way to add an addon to the game. Thus this project is only a planned project.',
                    skills: [],
                    link: 'https://addons.my-new-world.space/',
                    repository: ''
                },
                {
                    title: 'New World Discord Bot',
                    description: 'The Bot will work directly with the addon (as soon as possible) but it also provides stand-alone features. The Bot is meant to be used for: Company Gold Management, Planning of [Raids, Dungeons, Wars], Marketplace.',
                    skills: ['python'],
                    link: 'https://bot.my-new-world.space/',
                    repository: 'https://github.com/sircoffeeknight/nw-bot'
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>