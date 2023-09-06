<script setup lang="ts">
import Navigation from '../All/Navigation.vue'
import Footer from '../All/Footer.vue'
import buttonGoBack from '../All/Buttons/button-go-back.vue'
import Grid from './Components/Grid.vue'
import banner from './Components/Banner.vue'

import { useFormStore } from '../../pinia/formStore'

const formStore = useFormStore()
</script>

<template>
	<div class="flex flex-col items-center w-screen h-full bg-k-grey">
		<Navigation color="black" />
		<buttonGoBack />
		<banner v-if="formStore.showBanner" />
		<Grid />
		<Footer />
	</div>
</template>
