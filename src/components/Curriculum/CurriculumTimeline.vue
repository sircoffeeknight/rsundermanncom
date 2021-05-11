<template>
    <main class="timeline">
        <ul class="timeline__list">
            <li class="timeline__item" v-for="timelineProp in timeline" :key="timelineProp">
                <article>
                <div class="timeline__item__title"><h2>{{ timelineProp.title }}</h2></div>
                <div class="timeline__item__time" v-if="timelineProp.time || timelineProp.position"><span>{{ timelineProp.time }}</span> <span v-if="timelineProp.position">{{ timelineProp.position }}</span></div>
                <h4 class="timeline__item__grad" v-if="timelineProp.graduation">Graduation: {{ timelineProp.graduation }}</h4>
                <p class="timeline__item__desc" v-if="timelineProp.description">{{ timelineProp.description }}</p>
                <div class="timeline__item__skill" v-if="timelineProp.skill.length > 0" >
                    <ul>
                        <li v-for="skill in timelineProp.skill" :key="skill">{{ skill }}</li>
                    </ul>
                </div>
                </article>
            </li>
        </ul>
    </main>
</template>

<script>
export default {
    props: ['timeline'],
}
</script>

<style scoped>
main {
    position: relative;
    width: 80rem;
    margin: 0 auto;
}

.timeline__list{
    list-style: none;
    padding: 0;
}

.timeline__list:after {
    content: '';
    position: absolute;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 5px;
}

.timeline__list > .timeline__item:nth-child(odd) {
    left: 8.5%;
    width: 30rem;
    border-top: 25px solid transparent;
    border-right: 5px solid white;
    border-bottom: 25px solid transparent;
}

.timeline__list > .timeline__item:nth-child(even) {
    left: 54%;
    width: 30rem;
    border-top: 25px solid transparent;
    border-left: 5px solid white;
    border-bottom: 25px solid transparent;
}

.timeline__list > .timeline__item:first-child {
    z-index: 999;
    left: 45.8%;
    display: flex;
    justify-content: center;
    width: 7rem;
    border-radius: 100%;
    border: 5px solid white;
}

.timeline__list > .timeline__item:last-child {
    z-index: 999;
    left: 45.8%;
    display: flex;
    justify-content: center;
    width: 7rem;
    border-radius: 100%;
    border: 5px solid white;
}

.timeline__item {
    padding: 1rem;
    position: relative;
    background-color: rgb(43, 43, 43);
    color: white;
}

.timeline__item__time {
    display: flex;
    justify-content: space-between;
    background-color: rgb(70, 70, 70);
    padding: 0.2rem;
    position: relative;
    margin-bottom: 1rem;
}

.timeline__item__grad {
    margin: 0;
}

.timeline__item__desc {
    margin: 0 0 1rem 0; 
}

.timeline__item__skill > ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.2rem;
    padding: 0;
    justify-content: center;
}

.timeline__item__skill > ul > li {
    background-color: rgb(70, 70, 70);
    padding: 0.2rem;
}

@media only screen and (max-width: 1296px) {
    main {
        width: 100%;
    }

    .timeline__list:after {
        z-index: -999;
    }

    .timeline__list > .timeline__item:first-child {
        margin-top: 0;
    }

    .timeline__list > .timeline__item:nth-child(even) {
        margin: 1rem auto;
        left: 0;
        border-right: 5px solid white;
    }

    .timeline__list > .timeline__item:nth-child(odd) {
        margin: 0 auto;
        left: 0;
        border-left: 5px solid white;
    }

}

@media only screen and (max-width: 503px) {
    .timeline__list > .timeline__item:nth-child(odd), .timeline__list > .timeline__item:nth-child(even) {
        width: auto;
        border-radius: 0;
    }
}

</style>
