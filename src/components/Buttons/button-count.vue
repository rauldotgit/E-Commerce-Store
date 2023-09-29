<script setup lang="ts">
const props = defineProps<{
	itemCount: number
}>()
</script>

<template>
	<div class="flex flex-row items-center justify-center gap-3 lg:gap-4">
		<div
			ref="minusButton"
			@click="$emit('decreaseCart')"
			class="translate-all flex h-7 w-7 cursor-pointer flex-col justify-center rounded-full bg-gray-300 text-center font-semibold text-k-black duration-100 active:translate-y-0.5 active:opacity-100"
		>
			-
		</div>
		<p class="h-full text-center font-bold text-k-black">
			{{ props.itemCount }}
		</p>
		<div
			@click="$emit('increaseCart')"
			class="translate-all flex h-7 w-7 cursor-pointer flex-col justify-center rounded-full bg-gray-300 text-center font-semibold text-k-black duration-100 active:translate-y-0.5 active:opacity-100"
		>
			+
		</div>
	</div>
</template>
