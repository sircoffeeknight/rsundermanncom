<template>
    <main>
        <base-post type="history">
            <template v-slot:header>About me</template>
            <p>I've always been very curious about software development. I wouldn't say I have a specific field I'm interested in. Since I love playing Videogames, browsing the Web and, well, using Computers, I'm interested in all the different kinds of software.</p>
            <p>I've started to develop software roughly <span class="branding__color__bright">{{ years }}</span> years ago. It all began with learning how to use HTML and CSS in school. I was fascinated with the Idea, that a few lines of Code could produce anything I could imagine, almost at least.</p>
            <p>From there I started to use Content-Management-Systems like Joomla, Drupal and WordPress. I also took my first steps towards real development by utilizing PHP and MySQL.</p>
            <p>And so began my journey. Over the years I learned to use different languages and systems.</p>
        </base-post>
        <base-post type="graduation-cap">
            <template v-slot:header>Constantly Learning</template>
            <p>I soon realized that you can't just apply the things you have learned in the past or that you are used to. Developing any kind of software requires you to always stay up-to-date with new technologies.</p>
            <p>So I dedicate some of my freetime towards educating myself in new fields. Somethimes I just take a sneak-peek or I dive in a bit deeper to use it right away.</p>
            <p>One thing I can savely say about myself is, that I'm always ready to learn new things and to advance in the fields I already know. I'm aware that I'm not the "best developer" there is <span style="font-size: 1rem">yet</span>. But that won't stop me from advancing as much as I can.</p>
        </base-post>
        <base-post type="briefcase">
            <template v-slot:header>Job search & preferences</template>
            <p>The Covid-19 pandemic has hit everyone in one way or another. And eventhough my contact to the virus was limited to the news, it still affected me.</p>
            <p>Before the pandemic hit the western World, I moved from Berlin back into my Hometown. Unfortunately Covid made it harder to find a job.</p>
            <p>That's also the reason why I've made this website. To show that I am in fact a capable developer. And that I'm really a good addition to your Team.</p>
            <hr>
            <p>Over the years I had a few contacts with companies who wanted to hire developers. Ranging from bigger startups to smaller companies or Headhunters, a <span class="branding__color__bright">lot</span> of Headhunters. </p>
            <p>So I might as well just answer the more common questions here.</p>
            <p>I do not <span class="branding__color__bright">care</span> what size your company is. Seriously. All it comes down to is the <span class="branding__color__bright">Team</span> I'll be working with. Are they nice? Good!</p>
            <p>I'm not in it for the <span class="branding__color__bright">money</span>! Yes earning a lot is nice. And to be fair the pandemic has left some holes that will take some time to fix. But that does not change the fact, that I prefer a company that <span class="branding__color__bright">focuses</span> on a <span class="branding__color__bright">great</span> working <span class="branding__color__bright">environment</span> rather than just throwing money at the developers.</p>
            <p>I'll be honest with you. I prefer <span class="branding__color__bright">remote</span> work. Don't get me wrong, I like a great and engaging Team. But there is just something with remote work that really suits me. Though remote work is optional.</p>
            <p>Right now I'm <span class="branding__color__bright">not</span> able to move. For reasons I will not disclose here. So if you are interested, but need me to move to a different city, I unfortunately won't be able to.</p>
        </base-post>
        <base-post type="gamepad">
            <template v-slot:header>What I like to do (aka Hobbies)</template>
            <p>Do companies still ask you that? Well I want to tell you anyway.</p>
            <p><span class="branding__color__bright">I. LOVE. VIDEOGAMES</span></p>
            <p>I know what you are thinking. "Oh that young devloper likes Videogames. I'm shocked!" It is definately not the most creative thing, nor rare. But it is true. From Prototector on the NES to Mario, Zelda, Freelancer, WoW or COD. I loved and love games.</p>
            <p>I like to mess with things. Not tinker, I am awful at handy work. But I come up with so many Ideas for software that neither I or others really need. So I usually end up with one or two soon-to-be-forgotten projects every month.</p>
            <p>Books! And no that is <span class="branding__color__bright">not</span> a lie! Well at least if you include audiobooks. I like to sink myself into amazing stories and just let the time pass while I dive into some amazing fantasy worlds!</p>
        </base-post>
    </main>
</template>

<script>
export default {
    data() {
        return {
            date: '02 Jul 2007',
            years: null,
        }
    },
    methods: {
        getYearsSinceStart() {
            const years = new Date(new Date() - new Date(Date.parse(this.date))).getFullYear() - 1970;
            this.years = years;
        },
    },
    created() {
        this.getYearsSinceStart();
    }
}
</script>

<style scoped>

</style>
