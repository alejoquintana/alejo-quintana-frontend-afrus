<template>
    <div class="loader"></div>
</template>

<style lang="scss" scoped>
.loader {
    border: 10px solid var(--vt-c-white-soft);
    border-radius: 50%;
    border-top: 10px solid var(--vt-c-secondary);
    width: 60px;
    height: 60px;
    -webkit-animation: spin 2s linear infinite;
    /* Safari */
    animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}</style>