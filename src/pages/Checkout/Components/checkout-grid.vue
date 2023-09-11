<script setup lang="ts">
// import { useFormStore } from '../../../pinia/formStore'

// import banner from './Banner.vue'
import checkoutForm from './checkout-form.vue'
import checkoutSummary from './checkout-summary.vue'
</script>

<template>
	<!-- <banner v-if="formStore.showBanner" /> -->
	<div
		class="flex h-full w-11/12 max-w-6xl flex-col items-center gap-4 lg:mb-24 lg:grid lg:w-4/5 lg:grid-cols-3 lg:gap-6"
	>
		<!-- <div class="h-full w-full col-span-1 bg-white rounded">hi</div> -->
		<checkoutForm />
		<checkoutSummary />
	</div>
</template>
