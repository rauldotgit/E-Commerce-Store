<script setup lang="ts">
import { product } from '../../../data/products'

const props = defineProps<{
	cartItem: product
	itemCount: number
}>()
</script>

<template>
	<div
		v-if="itemCount > 0"
		class="flex flex-row justify-between gap-12 items-center w-full"
	>
		<div class="flex flex-row gap-4 h-full">
			<img
				class="aspect-square w-1/3 rounded-lg object-cover shadow-md"
				:src="props.cartItem.src"
				alt=""
			/>
			<div class="flex flex-col justify-center">
				<p class="text-k-black font-bold text-lg">
					{{ props.cartItem.header }}
				</p>
				<p class="text-k-black opacity-80 font-bold text-md">
					$ {{ props.cartItem.price }}
				</p>
			</div>
		</div>
		<div class="text-black opacity-50 h-full font-bold text-lg">
			x{{ props.itemCount }}
		</div>
	</div>
</template>
