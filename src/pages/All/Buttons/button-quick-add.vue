<script setup lang="ts">
import cart from '/icons/cart-icon.svg'
</script>

<template>
	<button
		@click="$emit('addToCart')"
		class="transition hover:translate-y-0.5 h-full aspect-square flex flex-row justify-center items-center cursor-pointer"
		data-test="button-quick-add"
	>
		<img
			class="active:translate-y-0.5 aspect-square h-6 invert"
			:src="cart"
			alt=""
		/>
		<p class="text-black font-bold">+</p>
	</button>
</template>
