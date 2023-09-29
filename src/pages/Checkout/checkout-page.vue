<script setup lang="ts">
import Navigation from '../../components/navigation-global.vue'
import Footer from '../../components/footer-global.vue'
import ButtonBack from '../../components/Buttons/button-go-back.vue'
import Grid from './Components/checkout-grid.vue'
import Banner from './Components/checkout-success-modal.vue'

import { useFormStore } from '../../pinia/formStore'

const formStore = useFormStore()
</script>

<template>
	<main class="flex h-full w-screen flex-col items-center bg-k-grey">
		<Navigation color="black" />
		<ButtonBack />
		<Banner v-if="formStore.showBanner" />
		<Grid />
		<Footer />
	</main>
</template>
