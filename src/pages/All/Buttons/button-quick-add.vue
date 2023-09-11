<script setup lang="ts">
import cart from '/icons/cart-icon.svg'
</script>

<template>
	<button
		@click="$emit('addToCart')"
		class="flex aspect-square h-full cursor-pointer flex-row items-center justify-center transition hover:translate-y-0.5"
		data-test="button-quick-add"
	>
		<img
			class="aspect-square h-6 invert active:translate-y-0.5"
			:src="cart"
			alt=""
		/>
		<p class="font-bold text-black">+</p>
	</button>
</template>
