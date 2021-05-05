<template>
    <Timeline :timeline="timelineData"/>
</template>

<script>
import Timeline from '../components/Curriculum/CurriculumTimeline.vue';

export default {
    components: {
        Timeline,
    },
    data() {
        return {
            timelineData: [
                {
                    title: 'You?',
                    time: '',
                    position: '',
                    skill: [],
                    graduation: '',
                    description: '',
                },
                {
                    title: 'Volt-Venture GmbH',
                    time: 'February 2021',
                    position: 'PHP-Developer Backend/Frontend',
                    skill: ['PHP', 'MySQL', 'javaScript', 'HTML', 'CSS', 'GIT'],
                    graduation: '',
                    description: 'Further developing the core platform as well as bug fixing.',
                },
                {
                    title: 'Delivery Hero Germany GmbH',
                    time: 'January 2019 - March 2020',
                    position: 'PHP-Developer',
                    skill: ['PHP', 'MySQL', 'javaScript', 'jQuery', 'HTML', 'CSS', 'GIT', 'Debian'],
                    graduation: '',
                    description: 'Developing an internal workforce management software. The core goal of the software was to allow the Teamleads within the Customer Care to manage and track the Associates. Realtime time tracking, status management, daily work report.',
                },
                {
                    title: 'Delivery Hero Germany GmbH',
                    time: 'December 2018 - January 2019',
                    position: 'Workforce Manager',
                    skill: ['Team-Management', 'Workforce Management'],
                    graduation: '',
                    description: '',
                },
                {
                    title: 'Delivery Hero Germany GmbH',
                    time: 'May 2018 - December 2018',
                    position: 'Senior Associate',
                    skill: [],
                    graduation: '',
                    description: '',
                },
                {
                    title: 'Delivery Hero Germany GmbH',
                    time: 'November 2017 - May 2018',
                    position: 'Associate',
                    skill: [],
                    graduation: '',
                    description: '',
                },
                {
                    title: 'Webdesigner Raphael Sundermann',
                    time: 'August 2017 - May 2018',
                    position: 'CEO - Web-Developer',
                    skill: [],
                    graduation: '',
                    description: '',
                },
                {
                    title: 'B.I.N.S.S GmbH',
                    time: 'August 2017 - November 2017',
                    position: 'Apprentice',
                    skill: [],
                    graduation: '',
                    description: '',
                },
                {
                    title: 'sprachlos GmbH',
                    time: 'January 2017 - August 2017',
                    position: 'Office Employee',
                    skill: [],
                    graduation: '',
                    description: '',
                },
                {
                    title: 'Pludra GmbH',
                    time: 'November 2015 - November 2016',
                    position: 'Temporary Job',
                    skill: [],
                    graduation: '',
                    description: '',
                },
                {
                    title: 'Abendrealschule Rheine',
                    time: 'September 2013 - January 2016',
                    position: '',
                    skill: [],
                    graduation: 'Fachoberschulreife',
                    description: '',
                },
                {
                    title: 'Start',
                    time: '',
                    position: '',
                    skill: [],
                    graduation: '',
                    description: '',
                },
            ]
        }
    },
}
</script>
