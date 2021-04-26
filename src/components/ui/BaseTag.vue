<template>
    <div class="tag" :class="type">
        {{ content }}
    </div>
</template>

<script>
export default {
    props: [
        'type',
        'content',
        'icon',
    ]
}
</script>

<style scoped>
.tag {
  border-radius: 1rem;
  padding: 0.4rem 1rem 0.4rem 1rem;
}

.backend {
    background-color: rgb(194, 0, 219);
}

.frontend {
    background-color: rgb(0, 95, 219);
}

.os {
    background-color: rgb(0, 219, 0);
}

.software {
    background-color: rgb(219, 142, 0);
}
</style>