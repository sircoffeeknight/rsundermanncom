<template>
    <section>
        <div class="post__type">
            <font-awesome-icon :icon="type" />
        </div>
        <article>
            <header>
                <h2><slot name="header"></slot></h2>
            </header>
            <slot></slot>
        </article>
    </section>
</template>

<script>
export default {
    props: ['type'],
}
</script>

<style scoped>
section {
    display: flex;
    justify-content: space-between;
    align-items: center; 
    width: 80rem;
    margin: 0 auto;
    padding: 1rem;
    /*background-color: rgba(43, 43, 43, 1);*/
    color: white;
    font-size: 2rem;
}

.post__type {
    width: 3rem;
    padding: 0 1rem 0 0;
    align-items: center;
    border-top: 50px solid transparent;
    border-right: 5px solid white;
    border-bottom: 50px solid transparent;
}

article {
    padding: 0 0 0 1rem;
    border-left: 3px solid white;
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
    font-size: 0.8em;
}

header {
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
}

header > h2 {
    font-size: rem;
}

@media only screen and (max-width: 1561px) {
    section {
        width: 60rem;
    }
}

@media only screen and (max-width: 961px) {
    section {
        width: 100%;
    }
}

@media only screen and (max-width: 858px) {
    section {
        display: block;
    }

    article {
        border-left: none;
        border-top: 3px solid white;
        border-top-right-radius: 2rem;
        border-top-left-radius: 2rem;
    }

    .post__type {
        margin: 0 auto; 
        padding: 0 0 1rem 0;
        border-left: 50px solid transparent;
        border-bottom: 5px solid white;
        border-right: 50px solid transparent;
    }

    .post__type > svg {
        position: absolute;
        left: 48%;
        margin: -2rem auto;
    }

    article {
        font-size: 0.8em;
    }
}

@media only screen and (max-width: 488px) {
    .post__type > svg {
        left: 46%;
    }
}

@media only screen and (max-width: 464px) {
    article {
        font-size: 0.6em;
    }
}
</style>