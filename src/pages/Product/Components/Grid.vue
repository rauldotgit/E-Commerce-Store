<script setup lang="ts">
// delete later
const props = defineProps<{
	topSrc: string
	botSrc: string
	rightSrc: string
}>()
</script>

<template>
	<div
		v-if="props.topSrc && props.botSrc && props.rightSrc"
		class="mt-16 lg:mt-32 w-full h-full flex flex-col items-center bg-white"
	>
		<div
			class="lg:max-h-[40rem] gap-5 w-4/5 max-w-6xl flex flex-col lg:grid lg:grid-cols-7 lg:grid-rows-2"
		>
			<img
				loading="lazy"
				class="rounded-md aspect-video lg:aspect-auto row-start-1 row-span-1 col-start-1 col-span-3 h-full w-full object-cover"
				:src="props.topSrc"
				alt=""
			/>
			<img
				loading="lazy"
				class="rounded-md aspect-video lg:aspect-auto row-start-2 row-span-1 col-start-1 col-span-3 h-full w-full object-cover"
				:src="props.botSrc"
				alt=""
			/>
			<img
				loading="lazy"
				class="rounded-md order-first lg:order-none aspect-square lg:aspect-auto row-start-1 row-end-3 col-start-4 col-span-4 h-full w-full object-cover"
				:src="props.rightSrc"
				alt=""
			/>
		</div>
	</div>
</template>
