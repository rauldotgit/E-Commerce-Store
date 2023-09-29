<script setup lang="ts">
import CategoryBox from './category-box.vue'

import keebImage from '/products/categories/category-keyboards.webp'
import keycapImage from '/products/categories/category-keycaps.webp'
import deskmatImage from '/products/categories/category-deskmats.webp'

const categories = [
	{
		src: keebImage,
		category: 'keyboards',
		imgClass: [''],
	},
	{
		src: keycapImage,
		category: 'keycaps',
		imgClass: ['scale-90'],
	},
	{
		src: deskmatImage,
		category: 'deskmats',
		imgClass: ['-mb-6', 'md:-mb-5', 'md:scale-110'],
	},
]
</script>

<template>
	<div class="mt-16 flex h-full w-full flex-col items-center bg-white lg:mt-32">
		<div
			class="flex w-4/5 flex-col items-center gap-4 md:h-[17rem] md:w-11/12 md:max-w-6xl md:flex-row md:justify-center md:gap-6 lg:w-4/5"
		>
			<CategoryBox
				v-for="(item, index) in categories"
				:key="index"
				:src="item.src"
				:category="item.category"
				:imgClass="item.imgClass"
			/>
		</div>
	</div>
</template>
