<script setup lang="ts">
import arrowIcon from '/icons/right-arrow.svg'

const props = defineProps<{
	src: string
	category: string
	imgClass: string | string[]
}>()
</script>

<template>
	<router-link
		:to="`/${props.category}`"
		class="group grid max-h-[14rem] w-full grid-cols-1 grid-rows-3 lg:max-h-[16rem]"
	>
		<img
			class="z-10 col-span-full row-span-2 row-start-1 aspect-square max-h-[18rem] place-self-center object-cover transition duration-300 group-hover:-translate-y-1 md:mb-3 md:max-h-[24rem]"
			:class="props.imgClass"
			:src="props.src"
			:alt="`${props.category} category box image`"
			loading="lazy"
		/>
		<div
			class="col-span-full row-span-2 row-start-2 rounded-lg bg-k-grey duration-300 group-hover:translate-y-1"
		></div>
		<div
			class="z-10 col-span-full row-span-1 row-start-3 mb-5 flex flex-col items-center self-end"
		>
			<h2 class="text-center text-xl font-bold uppercase text-black">
				{{ props.category }}
			</h2>
			<div
				class="mt-2 flex flex-row items-center gap-2 text-sm font-semibold uppercase text-black opacity-50"
			>
				<p>shop</p>
				<img :src="arrowIcon" alt="arrow icon" />
			</div>
		</div>
	</router-link>
</template>
