<script setup lang="ts">
// delete later
const props = defineProps<{
	topSrc: string
	botSrc: string
	rightSrc: string
}>()
</script>

<template>
	<section
		v-if="props.topSrc && props.botSrc && props.rightSrc"
		class="mt-16 flex h-full w-full flex-col items-center bg-white lg:mt-32"
	>
		<div
			class="flex w-4/5 max-w-6xl flex-col gap-3 lg:grid lg:max-h-[40rem] lg:grid-cols-7 lg:grid-rows-2 lg:gap-5"
		>
			<img
				loading="lazy"
				class="col-span-3 col-start-1 row-span-1 row-start-1 aspect-video h-full w-full rounded-md object-cover lg:aspect-auto"
				:src="props.topSrc"
				alt=""
			/>
			<img
				loading="lazy"
				class="col-span-3 col-start-1 row-span-1 row-start-2 aspect-video h-full w-full rounded-md object-cover lg:aspect-auto"
				:src="props.botSrc"
				alt=""
			/>
			<img
				loading="lazy"
				class="order-first col-span-4 col-start-4 row-start-1 row-end-3 aspect-square h-full w-full rounded-md object-cover lg:order-none lg:aspect-auto"
				:src="props.rightSrc"
				alt=""
			/>
		</div>
	</section>
</template>
