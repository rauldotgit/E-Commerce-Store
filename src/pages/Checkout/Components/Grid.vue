<script setup lang="ts">
// import { useFormStore } from '../../../pinia/formStore'

// import banner from './Banner.vue'
import checkoutForm from './checkoutForm.vue'
import checkoutSummary from './Summary.vue'
</script>

<template>
	<!-- <banner v-if="formStore.showBanner" /> -->
	<div class="grid grid-cols-3 gap-6 h-full w-4/5 mb-24 max-w-6xl">
		<!-- <div class="h-full w-full col-span-1 bg-white rounded">hi</div> -->
		<checkoutForm />
		<checkoutSummary />
	</div>
</template>
