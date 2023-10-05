<script setup>
import { useBooksStore } from '@/stores/books.js'
const bookStore = useBooksStore()

var timer = undefined
// Realiza la busqueda esperando 2 segundos despues de apretar cualquier tecla
function changeTerm(e) {

    bookStore.isLoading(true)
    clearTimeout(timer)
    timer = setTimeout(async () => {
        bookStore.setSearchTerm(e.target.value)
    }, 2000)
}
</script>

<template>
    <input v-model="bookStore.searchTerm" class="input" @keyup="changeTerm" type="text" placeholder="Buscar...">
</template>

<style lang="scss" scoped>
.input{
    font-size: 1.3rem;
    padding: 0.5rem;
    border-radius: 0.4rem;
    border: 1px solid var(--vt-c-text-light-2);
}
</style>