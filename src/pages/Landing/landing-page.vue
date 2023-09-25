<script setup lang="ts">
import Navigation from '../All/navigation-global.vue'
import LandingHero from './Components/landing-hero.vue'
import CategoryBoxes from '../All/category-box-container.vue'
import Footer from '../All/footer-global.vue'

import Info from '../All/info-section.vue'
import Grid from './Components/landing-grid.vue'
</script>

<template>
	<main
		class="main-container flex h-full w-screen flex-col items-center bg-white"
	>
		<Navigation color="k-black" />
		<main class="h-full w-screen">
			<LandingHero />
			<CategoryBoxes />
			<Grid />
			<Info />
		</main>
		<Footer />
	</main>
</template>
