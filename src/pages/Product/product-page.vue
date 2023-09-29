<script setup lang="ts">
import Navigation from '../../components/navigation-global.vue'
import Core from './Components/product-core.vue'
import Ymal from '../../components/ymal-boxes.vue'
import Grid from './Components/product-image-grid.vue'
import Info from '../../components/info-section.vue'
import Footer from '../../components/footer-global.vue'
import Features from './Components/product-features.vue'

import { getProduct } from '../../data/product-utils.ts'
import { computed } from 'vue'

const props = defineProps<{
	category: string
	productId: number
}>()

let item = computed(() => {
	return getProduct(props.category, props.productId)
})
</script>

<template>
	<main class="flex h-full w-screen flex-col items-center bg-white">
		<Navigation color="black" />
		<Core :item="item!" />
		<Features :features="item!.features" :inthebox="item!.inthebox" />
		<Grid
			:topSrc="item!.topSrc"
			:botSrc="item!.botSrc"
			:rightSrc="item!.rightSrc"
		/>
		<Ymal :productCategory="category" :productId="productId" />
		<Info />
		<Footer />
	</main>
</template>
