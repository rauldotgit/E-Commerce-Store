<script setup lang="ts">
import ButtonEmpty from '../../../components/Buttons/button-empty.vue'
import ButtonSolid from '../../../components/Buttons/button-solid.vue'
import krakenImage from '/products/deskmats/deskmat-kraken.webp'
import keycapsImage from '/display/keycaps.webp'
import frontImage from '/display/cow-front-new.webp'
import backImage from '/display/cow-back-new.webp'
</script>

<template>
	<section
		class="mt-20 flex h-full w-full flex-col items-center md:-mb-10 md:h-[70rem]"
	>
		<div
			class="md:grid-rows-7 flex h-full w-4/5 max-w-6xl flex-col items-center gap-4 md:grid md:w-11/12 md:grid-cols-6 md:gap-8 lg:w-4/5"
		>
			<div
				id="yellowBox"
				class="flex flex-col items-center overflow-hidden rounded-md bg-k-main text-black md:col-span-full md:row-span-3 md:h-[31rem]"
			>
				<div
					class="group order-1 flex h-full w-full flex-col items-center justify-center md:order-none md:grid md:grid-cols-7"
				>
					<router-link
						:to="{ name: 'keyboards', params: { id: 1 } }"
						href=""
						class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden md:col-span-4 md:px-10"
					>
						<img
							:src="frontImage"
							alt=""
							class="z-20 my-5 aspect-auto translate-x-3 translate-y-3 scale-110 md:my-0 md:translate-x-0 md:translate-y-0 md:scale-125 md:transition md:duration-700 md:group-hover:translate-x-6 md:group-hover:translate-y-6"
						/>
						<img
							:src="backImage"
							alt=""
							class="absolute z-10 aspect-auto -translate-x-3 -translate-y-3 scale-110 md:translate-x-0 md:translate-y-0 md:scale-100 md:transition md:duration-700 md:group-hover:-translate-x-6 md:group-hover:-translate-y-6"
						/>
						<div
							class="absolute h-[12rem] w-[12rem] rounded-full border border-black opacity-40 transition duration-700 group-hover:scale-125 md:h-[18rem] md:w-[18rem]"
						></div>
						<div
							class="absolute h-[20rem] w-[20rem] rounded-full border border-black opacity-40 transition duration-700 group-hover:scale-110 md:h-[26rem] md:w-[26rem]"
						></div>
						<div
							class="absolute h-[26rem] w-[26rem] rounded-full border border-black opacity-40 transition duration-700 group-hover:scale-90 md:h-[36rem] md:w-[36rem]"
						></div>
						<div
							class="absolute h-[32rem] w-[32rem] rounded-full border border-black opacity-40 transition duration-700 group-hover:scale-125 md:h-[46rem] md:w-[46rem]"
						></div>
					</router-link>
					<div
						class="relative z-10 col-span-3 flex h-full w-full flex-col justify-center bg-k-main md:pl-4 md:pr-20 lg:pl-6 lg:pr-24"
					>
						<h2
							class="text-center text-5xl font-semibold uppercase md:text-start lg:text-6xl"
						>
							ZX9 <br />
							Keyboard
						</h2>
						<p
							class="mb-8 mt-4 text-center tracking-wide md:mb-10 md:text-start"
						>
							Upgrade to premium keys that are phenominally built to deliver a
							truly remarkable typing feel.
						</p>
						<ButtonSolid
							:to="{ name: 'keyboards', params: { id: 1 } }"
							content="SEE PRODUCT"
							add="font-semibold hover:rotate-x-3"
							class="mb-10 self-center md:mb-0 md:self-start"
						/>
					</div>
				</div>
			</div>
			<div
				class="order-3 flex w-full flex-col items-center justify-center gap-6 rounded-md bg-k-grey p-6 text-black md:order-none md:col-span-2 md:row-span-2 md:h-full md:items-start md:bg-white md:px-6"
			>
				<h2 class="text-3xl font-semibold uppercase">Kraken deskmat</h2>
				<ButtonEmpty
					:to="{ name: 'deskmats', params: { id: 1 } }"
					content="see product"
				/>
			</div>
			<router-link
				:to="{ name: 'deskmats', params: { id: 1 } }"
				class="order-2 flex h-64 flex-col items-center justify-center overflow-hidden rounded-md bg-k-grey text-black md:order-none md:col-span-4 md:row-span-2 md:block md:h-full"
			>
				<img
					class="scale-150 object-cover grayscale duration-200"
					:src="krakenImage"
					alt=""
				/>
			</router-link>
			<div
				class="order-4 col-span-3 row-span-2 overflow-hidden rounded-md bg-k-grey text-black md:order-none md:h-full"
			>
				<img class="scale-150 object-cover" :src="keycapsImage" alt="" />
			</div>
			<div
				class="order-5 col-span-3 row-span-2 flex w-full flex-col items-center justify-center gap-6 rounded-md bg-k-grey p-6 text-black md:order-none md:h-full md:items-start md:px-16"
			>
				<h2 class="text-3xl font-semibold uppercase">Keycaps</h2>
				<ButtonEmpty :to="{ path: 'keycaps' }" content="see all" />
			</div>
		</div>
	</section>
</template>
