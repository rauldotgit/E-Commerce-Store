<script setup lang="ts">
import { product } from '../../data/products.ts'
import { onBeforeMount } from 'vue'
import { getSelection } from '../../data/products.ts'
import buttonSolid from '../All/Buttons/button-solid.vue'

const props = defineProps<{
	productCategory: string
	productId: number
}>()

let items: product[] = []

onBeforeMount(() => {
	items = getSelection(props.productCategory, props.productId)
})
</script>

<template>
	<div class="flex flex-col items-center w-4/5 max-w-6xl mt-20 lg:mt-32">
		<h2 class="uppercase mb-16 text-black font-Manrope text-3xl font-bold">
			You may also like
		</h2>
		<div
			class="flex flex-col items-center lg:grid lg:grid-cols-3 lg:grid-rows-1 gap-12 lg:gap-6"
		>
			<div
				class="flex flex-col items-center gap-8 lg:gap-10 justify-between"
				v-for="(item, index) in items"
				:key="index"
			>
				<router-link
					:to="{ name: item.category, params: { id: item.id } }"
					class="rounded overflow-hidden"
				>
					<img class="object-center" :src="item.src" alt="" />
				</router-link>
				<h3 class="text-center text-black font-Manrope text-2xl font-semibold">
					{{ item.header }} <br class="hidden lg:inline" />
					<span class="capitalize"> {{ item.subheader }}</span>
				</h3>
				<buttonSolid
					:to="{ name: item.category, params: { id: item.id } }"
					color="light"
					content="see product"
					size="small"
				/>
			</div>
		</div>
	</div>
</template>
