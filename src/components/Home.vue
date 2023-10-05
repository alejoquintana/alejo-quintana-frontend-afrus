<script setup>
import ShowAllBooks from "./books/ShowAll.vue";
import SearchBar from "./SearchBar.vue";
</script>

<template>
    <h1 class="title-page text-center">
        Bienvenido a Mi Tienda de Libros
    </h1>
    <div class="search-bar-wrap">
        <SearchBar  />
    </div>
    <ShowAllBooks/>
</template>

<style lang="scss" scoped>
.title-page{
    font-weight: bold;
    font-size: 3rem;
}
.search-bar-wrap{
    display: flex;
    justify-content: center;
    margin: 2rem 0;
}
</style>