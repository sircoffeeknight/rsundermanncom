<template>
    <section>
        <div class="info__banner">
            <div class="info__banner__inner">
                <div class="info__banner__wStatus">
                    Work Status: Open for Work!
                </div>
                <div class="info__banner__cApp">
                    Current Applications: {{ currentApplicationNBR }}
                </div>
                <div class="info__banner__pServer">
                    Server Status: Online
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: [
        "currentApplicationNBR"
    ],

}
</script>

<style scoped>
.info__banner {
    width: 100%;
    height: 5rem;
    background-color: orangered;
}

.info__banner__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 80rem;
    height: 100%;
    margin: 0 auto;
}

.info__banner__inner > div {
    padding: 2rem;
    background-color: white;
}
</style>