<script setup>
//import { router } from 'vue-router'
import { useRouter } from 'vue-router'
const router = useRouter()
const items = [
    { path: "/", name: "Inicio" },
    { path: "/carrito", name: "Carrito" },
    { path: "/calculadora", name: "Calculadora" },
    { path: "/catalogo", name: "Catálogo" },
    { path: "/contacto", name: "Contacto" }
]
function goTo(path) {
    router.push(path)
}
</script>

<template>
    <nav class="nav">
        <div class="items">
            <span class="item" v-for="({ name, path }, i) in items" :key="i" @click="goTo(path)">
                {{ name }}
            </span>
        </div>
    </nav>
</template>
<style lang="scss" scoped>
.items {
    margin: 0 auto;
    gap: 1rem;
    display: flex;
    align-items: center;
    border-bottom: solid 2px var(--vt-c-primary);
    justify-content: center;

    .item {
        font-size: 1.3rem;
        padding: 0.5rem 3rem;
        transition: 500ms;
    }
}

.item:hover {
    background: var(--vt-c-secondary);
}
</style>