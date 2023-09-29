<script setup lang="ts">
import ButtonSolid from '../../../components/Buttons/button-solid.vue'
import ButtonGoBack from '../../../components/Buttons/button-go-back.vue'
import { product } from '../../../data/product-types.ts'
import { useCartStore } from '../../../pinia/cartStore.ts'

const cartStore = useCartStore()

const props = defineProps<{
	item: product
}>()
</script>

<template>
	<ButtonGoBack />
	<section
		class="flex w-4/5 max-w-6xl flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1"
	>
		<div
			class="flex flex-col items-center pb-6 lg:col-span-1 lg:col-start-2 lg:row-span-full lg:ml-24 lg:items-start lg:justify-center"
		>
			<p
				v-if="props.item.nu"
				class="lg:text-md text-sm uppercase tracking-broad text-black"
			>
				new product
			</p>
			<h1
				class="mt-4 text-center text-4xl font-semibold uppercase text-black lg:text-start lg:text-6xl"
			>
				{{ props.item.header }} <br class="hidden lg:inline" />
				{{ props.item.subheader }}
			</h1>
			<p class="mt-6 text-center text-black opacity-60 lg:pr-20 lg:text-start">
				{{ props.item.text }}
			</p>
			<p class="my-8 text-xl font-bold text-black">$ {{ props.item.price }}</p>
			<ButtonSolid
				@click="cartStore.addToCart(props.item)"
				color="light"
				add="font-bold"
				content="add to cart"
			/>
		</div>
		<div
			class="order-first overflow-hidden rounded pb-10 lg:order-none lg:col-span-1 lg:col-start-1 lg:row-span-full lg:pb-0"
		>
			<img
				loading="lazy"
				class="relative aspect-square object-cover"
				:src="props.item.src"
				alt=""
			/>
		</div>
	</section>
</template>
