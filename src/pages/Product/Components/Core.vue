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
	<div class="grid grid-cols-2 grid-rows-1 w-4/5 max-w-6xl">
		<div
			class="ml-24 flex flex-col justify-center pb-6 row-span-full col-start-2 col-span-1"
		>
			<p v-if="props.item.nu" class="uppercase tracking-broad text-black">
				new product
			</p>
			<h1 class="uppercase text-6xl text-black mt-4 font-semibold">
				{{ props.item.header }} <br />
				{{ props.item.subheader }}
			</h1>
			<p class="pr-20 mt-6 text-black opacity-60">
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
		<div class="overflow-hidden row-span-full col-start-1 col-span-1 rounded">
			<img
				loading="lazy"
				class="object-cover relative aspect-square"
				:src="props.item.src"
				alt=""
			/>
		</div>
	</div>
</template>
