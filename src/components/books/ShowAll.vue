<script setup>
import { onMounted } from 'vue'
import BookCard from "./BookCard.vue"
import loader from "../loader.vue"
import { useBooksStore } from '@/stores/books'

const store = useBooksStore()
onMounted(() => {
    store.fetchBooks()
})
</script>

<template>
    <div v-if="store.loading || store.books.items <= 0" class="d-flex-center">
        <loader></loader>
    </div>
    <div v-else class="container">
        <BookCard v-for="book in store.books.items" :key="book.id" :book="book" />
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
}

@media (min-width: 1080px) {
    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}

.loader {
  border: 10px solid var(--vt-c-white-soft);
  border-radius: 50%;
  border-top: 10px solid var(--vt-c-secondary);
  width: 60px;
  height: 60px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>