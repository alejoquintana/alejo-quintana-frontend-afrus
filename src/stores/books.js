import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBooksStore = defineStore('books', () => {
    const books = ref([])
    const loading = ref(false)
    const searchTerm = ref('adventure')
    const URL = "https://www.googleapis.com/books/v1/volumes"
    const getBooks = computed(() => books)

    // actualiza el termino de busqueda y la lista de libros
    async function setSearchTerm(term) {
        if (!term) {
            term = "adventure"
        }
        searchTerm.value = term
        this.fetchBooks()
    }
    
    async function isLoading(value) {
        loading.value = value
    }

    async function fetchBooks() {
        try {
            await fetch(URL+"?q="+searchTerm.value).then(response => response.json())
                .then(data => this.books = data);
        } catch (error) {
            return error
        }
        this.isLoading(false)
        //console.log('this.books',this.books.items[0]);
    }

    return { books, loading, getBooks, fetchBooks, setSearchTerm, isLoading }
})
