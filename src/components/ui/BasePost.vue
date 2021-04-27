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
}

header {
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
}

header > h2 {
    font-size: rem;
}
</style>