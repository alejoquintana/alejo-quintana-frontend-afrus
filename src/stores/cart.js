import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],
    }),
    getters: {
        fullCart: (state) => state.cart,
    },
    actions: {
        inCart(id) {
            let item = this.cart.find((item) => {
                return item.id == id
            })
            console.log('item',item);
            return !!item
        },
        // agrega un version minimizada de un libro solo con los datos necesarios
        addBook(fullBook) {
            let book = {
                id: fullBook.id,
                title: fullBook.volumeInfo.title,
                img: fullBook.volumeInfo.imageLinks.thumbnail,
                price: fullBook.saleInfo.listPrice.amount,
                currency: fullBook.saleInfo.listPrice.currencyCode,
                amount:1
            }
            this.cart.push(book)
        },
        removeBook(id) {
            const bookWithIdIndex = this.cart.findIndex((item) => item.id === id);

            if (bookWithIdIndex > -1) {
                this.cart.splice(bookWithIdIndex, 1);
            }
        },
    },
})