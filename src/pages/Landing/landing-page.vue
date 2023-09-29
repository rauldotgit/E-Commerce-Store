<script setup lang="ts">
import Navigation from '../../components/navigation-global.vue'
import LandingHero from './Components/landing-hero.vue'
import CategoryBoxes from '../../components/Category-Box/category-box-container.vue'
import Footer from '../../components/footer-global.vue'
import Info from '../../components/info-section.vue'
import Grid from './Components/landing-grid.vue'
</script>

<template>
	<div
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
	</div>
</template>
