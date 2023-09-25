<script setup lang="ts">
import CheckoutForm from './checkout-form.vue'
import CheckoutSummary from './checkout-summary.vue'
</script>

<template>
	<div
		class="flex h-full w-11/12 max-w-6xl flex-col items-center gap-4 lg:mb-24 lg:grid lg:w-4/5 lg:grid-cols-3 lg:gap-6"
	>
		<CheckoutForm />
		<CheckoutSummary />
	</div>
</template>
