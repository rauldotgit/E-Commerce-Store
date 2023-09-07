<script setup lang="ts">
import { product } from '../../../data/products'
import buttonSolid from '../../All/Buttons/button-solid.vue'
import { useCartStore } from '../../../pinia/cartStore.ts'
import ButtonGoBack from '../../All/Buttons/button-go-back.vue'

const cartStore = useCartStore()

const props = defineProps<{
	item: product
}>()
</script>

<template>
	<ButtonGoBack />
	<div
		class="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1 w-4/5 max-w-6xl"
	>
		<div
			class="lg:ml-24 flex flex-col items-center lg:items-start lg:justify-center pb-6 lg:row-span-full lg:col-start-2 lg:col-span-1"
		>
			<p
				v-if="props.item.nu"
				class="uppercase text-sm lg:text-md tracking-broad text-black"
			>
				new product
			</p>
			<h1
				class="uppercase text-4xl text-center lg:text-start lg:text-6xl text-black mt-4 font-semibold"
			>
				{{ props.item.header }} <br class="hidden lg:inline" />
				{{ props.item.subheader }}
			</h1>
			<p class="text-center lg:text-start lg:pr-20 mt-6 text-black opacity-60">
				{{ props.item.text }}
			</p>
			<p class="text-xl font-bold my-8 text-black">$ {{ props.item.price }}</p>
			<buttonSolid
				@click="cartStore.addToCart(props.item)"
				color="light"
				add="font-bold"
				content="add to cart"
			/>
		</div>
		<div
			class="order-first lg:order-none pb-10 lg:pb-0 overflow-hidden lg:row-span-full lg:col-start-1 lg:col-span-1 rounded"
		>
			<img
				loading="lazy"
				class="object-cover relative aspect-square"
				:src="props.item.src"
				alt=""
			/>
		</div>
	</div>
</template>
