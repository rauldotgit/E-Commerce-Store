<script setup lang="ts">
import buttonEmpty from '../../All/Buttons/button-empty.vue'
import buttonSolid from '../../All/Buttons/button-solid.vue'
import kraken from '/products/deskmats/deskmat-kraken.webp'
import keycaps from '/display/keycaps.webp'
import front from '/display/cow-front-new.webp'
import back from '/display/cow-back-new.webp'
</script>

<template>
	<div
		class="mt-20 flex h-full w-full flex-col items-center lg:-mb-10 lg:h-[70rem]"
	>
		<div
			class="lg:grid-rows-7 flex h-full w-11/12 max-w-6xl flex-col items-center gap-4 lg:grid lg:w-4/5 lg:grid-cols-6 lg:gap-8"
		>
			<div
				id="yellowBox"
				class="flex flex-col items-center overflow-hidden rounded-md bg-k-main text-black lg:col-span-full lg:row-span-3 lg:h-[31rem]"
			>
				<div
					class="group order-1 flex h-full w-full flex-col items-center justify-center lg:order-none lg:grid lg:grid-cols-7"
				>
					<router-link
						:to="{ name: 'keyboards', params: { id: 1 } }"
						href=""
						class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden lg:col-span-4 lg:px-10"
					>
						<img
							:src="front"
							alt=""
							class="z-20 my-5 aspect-auto translate-x-3 translate-y-3 scale-110 lg:my-0 lg:translate-x-0 lg:translate-y-0 lg:scale-125 lg:transition lg:duration-700 lg:group-hover:translate-x-6 lg:group-hover:translate-y-6"
						/>
						<img
							:src="back"
							alt=""
							class="absolute z-10 aspect-auto -translate-x-3 -translate-y-3 scale-110 lg:translate-x-0 lg:translate-y-0 lg:scale-100 lg:transition lg:duration-700 lg:group-hover:-translate-x-6 lg:group-hover:-translate-y-6"
						/>
						<div
							class="absolute h-[12rem] w-[12rem] rounded-full border border-black opacity-40 transition duration-700 group-hover:scale-125 lg:h-[18rem] lg:w-[18rem]"
						></div>
						<div
							class="absolute h-[20rem] w-[20rem] rounded-full border border-black opacity-40 transition duration-700 group-hover:scale-110 lg:h-[26rem] lg:w-[26rem]"
						></div>
						<div
							class="absolute h-[26rem] w-[26rem] rounded-full border border-black opacity-40 transition duration-700 group-hover:scale-90 lg:h-[36rem] lg:w-[36rem]"
						></div>
						<div
							class="absolute h-[32rem] w-[32rem] rounded-full border border-black opacity-40 transition duration-700 group-hover:scale-125 lg:h-[46rem] lg:w-[46rem]"
						></div>
					</router-link>
					<div
						class="relative z-10 col-span-3 flex h-full w-full flex-col justify-center lg:px-10 lg:pr-20"
					>
						<h2
							class="text-center text-5xl font-semibold uppercase lg:text-start lg:text-6xl"
						>
							ZX9 <br />
							Keyboard
						</h2>
						<p
							class="mb-8 mt-4 text-center tracking-wide lg:mb-10 lg:text-start"
						>
							Upgrade to premium keys that are phenominally built to deliver a
							truly remarkable typing feel.
						</p>
						<buttonSolid
							:to="{ name: 'keyboards', params: { id: 1 } }"
							content="SEE PRODUCT"
							add="font-semibold hover:rotate-x-3"
							class="mb-10 self-center lg:mb-0 lg:self-start"
						/>
					</div>
				</div>
			</div>
			<div
				class="order-3 flex w-full flex-col items-center justify-center gap-6 rounded-md bg-k-grey p-6 text-black lg:order-none lg:col-span-2 lg:row-span-2 lg:h-full lg:items-start lg:bg-white lg:px-6"
			>
				<h2 class="text-3xl font-semibold uppercase">Kraken deskmat</h2>
				<buttonEmpty
					:to="{ name: 'deskmats', params: { id: 1 } }"
					content="see product"
				/>
			</div>
			<router-link
				:to="{ name: 'deskmats', params: { id: 1 } }"
				class="order-2 flex h-64 flex-col items-center justify-center overflow-hidden rounded-md bg-k-grey text-black lg:order-none lg:col-span-4 lg:row-span-2 lg:block lg:h-full"
			>
				<img
					class="scale-150 object-cover grayscale duration-200"
					:src="kraken"
					alt=""
				/>
			</router-link>
			<div
				class="order-4 col-span-3 row-span-2 overflow-hidden rounded-md bg-k-grey text-black lg:order-none lg:h-full"
			>
				<img class="scale-150 object-cover" :src="keycaps" alt="" />
			</div>
			<div
				class="order-5 col-span-3 row-span-2 flex w-full flex-col items-center justify-center gap-6 rounded-md bg-k-grey p-6 text-black lg:order-none lg:h-full lg:items-start lg:px-16"
			>
				<h2 class="text-3xl font-semibold uppercase">Keycaps</h2>
				<buttonEmpty :to="{ path: 'keycaps' }" content="see all" />
			</div>
		</div>
	</div>
</template>
