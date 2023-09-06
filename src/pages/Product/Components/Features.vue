<script setup lang="ts">
import { contents } from '../../../data/products'

const props = defineProps<{
	features: string
	inthebox: contents[]
}>()
</script>
<template>
	<div class="grid grid-cols-2 grid-rows-1 w-4/5 max-w-6xl mt-32">
		<div class="w-full h-full flex flex-col">
			<h2 class="mb-8 tracking-wide text-black text-2xl font-bold">FEATURES</h2>
			<p class="text-black opacity-60 tracking-wide">
				{{ props.features }}
			</p>
		</div>
		<div class="ml-24 w-full h-full flex flex-col">
			<h2 class="mb-8 tracking-wide text-black text-2xl font-bold">
				IN THE BOX
			</h2>
			<div
				class="flex flex-row items-baseline gap-4"
				v-for="item in props.inthebox"
			>
				<p class="tracking-wide font-bold text-k-main">{{ item.count }}x</p>
				<p class="text-black opacity-60 tracking-wide">
					{{ item.content }}
				</p>
			</div>
		</div>
	</div>
</template>
