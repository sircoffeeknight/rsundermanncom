<template>
    <section>
        <div class="footer">
            <FooterInfo/>
        </div>
    </section> 
</template>

<script>
import FooterInfo from "../Footer/FooterInfo.vue";

export default {
    components: {
        FooterInfo,
    }
}
</script>

<style scoped>
/* Header Section */

section {
    color: white;
}

/* footer */
.footer {
    border-bottom: 3rem solid rgba(43, 43, 43, 1);
}
</style>