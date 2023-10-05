<!-- Vista general de los libros que se muestran en el inicio-->
<script setup>
import VLazyImage from "v-lazy-image";
import { useCartStore } from '@/stores/cart.js'
import { onMounted, ref } from "vue";
const cartStore = useCartStore()

const props = defineProps(['book'])
const book = props.book
// variable que condiciona si se muestra un boton que añade el libro al carrito
const inCart = ref(false)

inCart.value = cartStore.inCart(book.id)
// Agregar un libro a la store del Carrito
function addToCart() {
    cartStore.addBook(book)
    inCart.value = true
}
</script>

<template>
    <div class="card">
        <div class="img-container">
            <!-- si el libro no tiene imagen se muestra una default -->
            <v-lazy-image v-if="book.volumeInfo.imageLinks && (book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.smallthumbnail)"
            class="img" :src="book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.smallthumbnail" :alt="book.volumeInfo.title" />
            <v-lazy-image v-else class="img" src="/content.png" :alt="book.volumeInfo.title" />
        </div>
        <div class="info">
            <div>
                <p class="categories" v-if="book.volumeInfo.categories">
                    <span v-for="category, i in book.volumeInfo.categories" :key="i">
                        {{ category }}
                        <span v-if="i == book.volumeInfo.categories.lentgh - 1">,</span>
                    </span>
                </p>
                <span class="title">{{ book.volumeInfo.title }}</span>
            </div>
            <p class="price" v-if="book.saleInfo.saleability == 'FOR_SALE'">
                <span class="bold" v-if="book.saleInfo.isEbook">Ebook</span> <br>
                <span>{{ book.saleInfo.listPrice.currencyCode }}${{ book.saleInfo.listPrice.amount }}</span>
            </p>
            <p v-else class="price italic text-light">
                <span>No esta a la venta!</span>
            </p>
            <div v-if="book.saleInfo.saleability == 'FOR_SALE'">
                <button v-if="!inCart" class="btn" @click="addToCart">
                    AL CARRITO!
                </button>
                <button v-else class="btn-disabled" disabled @click="addToCart">
                    Ya esta en el carrito
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 10px;

    //grid-auto-rows: auto;
    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}

.img-container {
    overflow: hidden;
    display: flex;
    justify-content: center;
    .img {
        transition: all 500ms;
    }
    .img:hover {
        transform: scale(1.2);
    }
}

.btn-disabled {
    width: 100%;
    padding: 0.4rem 0;
    background: none;
    border: 1px solid var(--vt-c-text-light-2);
    border-radius: 0.5rem;
    font-style: italic;
    color: var(--vt-c-text-light-2);
}
.btn {
    width: 100%;
    padding: 0.4rem 0;
    background: none;
    border: 2px solid var(--vt-c-primary);
    border-radius: 0.5rem;
    color: var(--vt-c-primary);
    transition: all 500ms;
}

.btn:hover{
    color: #FFF;
    background: var(--vt-c-primary);
    border: 2px solid var(--vt-c-primary);
}

.title {
    line-height: 1rem;
    font-size: 1.2rem;
}

.categories {
    font-size: 0.8rem;
    color: var(--vt-c-text-light-2);
    line-height: 1rem;
}

.price {
    text-align: end;
}
</style>