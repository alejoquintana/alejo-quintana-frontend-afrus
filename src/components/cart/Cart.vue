<script setup>
//import BookCard from "./BookCard.vue"
import { useCartStore } from '@/stores/cart'
import { ref, onMounted, watch } from 'vue'


const store = useCartStore()
// Remover un libro del carrito
function removeBook(id) {
    store.removeBook(id)
}

const total = ref(0)
function calculateTotal() {
    store.cart.forEach(book => {
        total.value += book.price
    });
    total.value = Math.ceil(total.value)
}
//al renderizarse y cada vez que se actualice la store se calcula el total
onMounted(() => {
    calculateTotal()
})
watch(store.cart, async () => {
    calculateTotal()
})
</script>

<template>
    <div class="container">
        <div v-if="store.cart && store.cart.length <=0">
            <p class="no-books">
                No hay ningun libro cargado. <br>
                <router-link style="font-size: 1.2rem;text-decoration: underline;" to="/">ir a inicio</router-link>
            </p>
        </div>
        <table v-else class="books-table">
            <tr class="header">
                <th>Portada</th>
                <th>Titulo</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th></th>
            </tr>
            <tr class="book-item" v-for="item in store.cart" :key="item.id">
                <td><img class="img-column" :src="item.img" :alt="item.title"></td>
                <td>{{ item.title }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.currency }} $ {{ item.price }}</td>
                <td><button @click="removeBook(item.id)">x</button></td>
            </tr>
            <tr>
                <td colspan="3" class="total">TOTAL</td>
                <td colspan="2" class="total total-label">ARS $ {{ total }}</td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;
    padding: 2rem;
}
.no-books{
    font-size: 2rem;
    text-align: center;
}

.books-table {
    width: 100%;
    border-spacing: 0;
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    .header {
        background-color: var(--vt-c-secondary);
        th {
            font-size: 1.2rem;
            padding: 0.2rem 0;
        }
    }

    td {
        text-align: center;
        .img-column {
            width: 4rem;
        }
    }
}

.total {
    text-align: end !important;
    font-size: 2rem;
    padding: 0.6rem;
}

@media (min-width: 1080px) {}
</style>