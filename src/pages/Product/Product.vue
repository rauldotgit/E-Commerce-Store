<script setup lang="ts">
import Navigation from '../All/Navigation.vue'
import Core from './Components/Core.vue'
import Ymal from '../All/Ymal.vue'
import Grid from './Components/Grid.vue'
// import Categories from '../All/Categories.vue'
import Info from '../All/Info.vue'
import Footer from '../All/Footer.vue'

import { getProduct } from '../../data/products.ts'
import { computed } from 'vue'
import Features from './Components/Features.vue'

const props = defineProps<{
	category: string
	productId: number
}>()

let item = computed(() => {
	return getProduct(props.category, props.productId)
})
</script>

<template>
	<div class="flex flex-col items-center w-screen h-full bg-white">
		<Navigation color="black" />
		<!-- <h1 class="text-6xl text-black">{{ props.productId }}</h1> -->
		<Core :item="item!" />
		<Features :features="item!.features" :inthebox="item!.inthebox" />
		<Grid
			:topSrc="item!.topSrc"
			:botSrc="item!.botSrc"
			:rightSrc="item!.rightSrc"
		/>
		<Ymal :productCategory="category" :productId="productId" />
		<!-- <Categories /> -->
		<Info />
		<Footer />
	</div>
</template>
