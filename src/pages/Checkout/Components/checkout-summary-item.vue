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
		class="flex w-full flex-row items-center justify-between gap-12"
	>
		<div class="flex h-full flex-row gap-4">
			<img
				class="aspect-square w-1/3 rounded-lg object-cover shadow-md"
				:src="props.cartItem.src"
				alt=""
			/>
			<div class="flex flex-col justify-center">
				<p class="text-lg font-bold text-k-black">
					{{ props.cartItem.header }}
				</p>
				<p class="text-md font-bold text-k-black opacity-80">
					$ {{ props.cartItem.price }}
				</p>
			</div>
		</div>
		<div class="h-full text-lg font-bold text-black opacity-50">
			x{{ props.itemCount }}
		</div>
	</div>
</template>
