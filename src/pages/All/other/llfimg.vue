<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps<{
	src: string
	atom: string
	alt?: string
	small?: string
	medium?: string
	large?: string
}>()

// var srcSet: string = ''
onMounted(() => {

	const imgDiv = document.querySelector('.blurred-img')
	const img = imgDiv!.querySelector('img')

	function loaded() {
		imgDiv!.classList.add('loaded')
	}

	if (img!.complete) {
		loaded()
	} else {
		img!.addEventListener('load', loaded)
	}
})

// const blurredImageDiv = this.$el.querySelector('.blurred-img')
// const img = blurredImageDiv!.querySelector('img')
</script>

<template>
	<div
		ref="imgDiv"
		class="w-screen h-full object-cover blurred-img bg-[url({{props.atom}})]"
	>
		<img ref="img" :src="props.src" :alt="props.alt" />
	</div>
</template>

<style scoped>
.blurred-img {
	/* background-image: url(); */
	background-repeat: no-repeat;
	background-size: cover;
	/* filter: blur(20px); */
}

.blurred-img.loaded::before {
	animation: none;
	content: none;
	/* filter: none; */
}

.blurred-img img {
	opacity: 0;
	transition: opacity 250ms ease-in-out;
}

.blurred-img.loaded img {
	opacity: 1;
}
</style>
