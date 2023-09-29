<script lang="ts" setup>
import ButtonSolid from '../../../components/Buttons/button-solid.vue'
import mxupImage from '/products/keyboards/up-nobg.webp'
</script>

<template>
	<section
		class="flex w-full flex-col items-center overflow-hidden rounded-b-md bg-k-black"
	>
		<div
			class="relative mt-20 flex max-w-6xl flex-col text-center transition-transform duration-200 sm:w-4/5 md:grid md:w-11/12 md:grid-cols-2 md:text-start lg:w-4/5"
		>
			<div
				class="relative z-10 flex flex-col items-center justify-center pb-6 sm:ml-0 md:ml-10 md:items-start lg:ml-0"
			>
				<p class="md:text-md text-sm font-light uppercase tracking-broad">
					new product
				</p>
				<h1
					class="relative mt-4 text-5xl font-semibold uppercase text-white md:text-6xl"
				>
					xx99 <br class="hidden md:block lg:hidden" />
					mark II <br />
					Keyboard
				</h1>
				<p class="mb-10 mt-5 md:opacity-90">
					Enjoy a natural, light typing experience and exceptional
					<br class="hidden md:inline" />
					build quality made for the passionate coding
					<br class="hidden md:inline" />
					enthusiast.
				</p>
				<ButtonSolid
					:to="{ name: 'keyboards', params: { id: 2 } }"
					content="see product"
					color="light"
					add="font-bold mb-20"
				/>
			</div>
			<div
				class="absolute bottom-0 z-0 aspect-auto w-full opacity-30 md:relative md:z-10 md:opacity-100"
			>
				<img
					class="relative top-12 scale-[175%] md:top-20 md:scale-[175%] lg:top-12 lg:scale-150"
					:src="mxupImage"
					alt=""
				/>
			</div>
		</div>
	</section>
</template>
