<script setup lang="ts">
import Navigation from '../All/navigation-global.vue'
import Footer from '../All/footer-global.vue'
import buttonGoBack from '../All/Buttons/button-go-back.vue'
import Grid from './Components/checkout-grid.vue'
import banner from './Components/checkout-success-modal.vue'

import { useFormStore } from '../../pinia/formStore'

const formStore = useFormStore()
</script>

<template>
	<div class="flex h-full w-screen flex-col items-center bg-k-grey">
		<Navigation color="black" />
		<buttonGoBack />
		<banner v-if="formStore.showBanner" />
		<Grid />
		<Footer />
	</div>
</template>
