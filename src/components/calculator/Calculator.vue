<script setup>
import { ref } from "vue";
const form$ = ref(null)
const final_price = ref(0)

//funcion simple que calcula el descuento del precio de un libro
function calculateDiscount() {
    final_price.value = (form$.value.data.total_price * form$.value.data.discount) / 100
    console.log('form$.value.data', form$.value.data);
}
</script>

<template>
    <h1>Calculadora de descuentos</h1>
    <Vueform ref="form$">
        <TextElement name="total_price" label="Precio total"
        :addons="{ before: '$'}" rules="required" input-type="number" />
        <TextElement name="discount" label="Descuento"
        :addons="{ before: '%'}" rules="required" input-type="number" />
        <ButtonElement name="submit_button" button-label="Submit"
        submits @click="calculateDiscount" :button-class="{'btn-submit': true}"
        :add-class="{
            classname: 'btn-submit',
        }"/>
    </Vueform>

    <h3>Precio final</h3>
    <p class="final_price">
        {{ final_price }}
    </p>
</template>

<style lang="scss" scoped>
h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 2rem;
}

h3 {
    margin-top: 2rem;
    font-size: 1.5rem;
}
.final_price {
    border: solid 2px var(--vt-c-secondary);
    border-radius: 0.5rem;
    font-size: 2rem;
    //width: 100%;
    padding: 0.5rem 2rem;
    min-width: 20rem;
    text-align: center;
}
</style>
