<script setup lang="ts">
const props = defineProps<{
	itemCount: number
}>()
</script>

<template>
	<div class="flex flex-row gap-3 lg:gap-4 justify-center items-center">
		<div
			ref="minusButton"
			@click="$emit('decreaseCart')"
			class="flex flex-col justify-center rounded-full h-7 w-7 bg-gray-300 translate-all duration-100 cursor-pointer active:opacity-100 text-center text-k-black font-semibold active:translate-y-0.5"
		>
			-
		</div>
		<p class="h-full text-center text-k-black font-bold">
			{{ props.itemCount }}
		</p>
		<div
			@click="$emit('increaseCart')"
			class="flex flex-col justify-center rounded-full h-7 w-7 bg-gray-300 translate-all duration-100 cursor-pointer active:opacity-100 text-center text-k-black font-semibold active:translate-y-0.5"
		>
			+
		</div>
	</div>
</template>
