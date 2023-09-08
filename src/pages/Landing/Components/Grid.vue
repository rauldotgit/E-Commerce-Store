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
		class="mt-20 lg:mt-32 lg:-mb-10 flex flex-col items-center w-full h-full lg:h-[70rem]"
	>
		<div
			class="w-11/12 lg:w-4/5 h-full flex flex-col items-center lg:grid lg:grid-cols-6 gap-4 lg:gap-8 lg:grid-rows-7 max-w-6xl"
		>
			<div
				id="yellowBox"
				class="flex flex-col items-center lg:h-[31rem] overflow-hidden rounded-md text-black bg-k-main lg:row-span-3 lg:col-span-full"
			>
				<div
					class="group order-1 lg:order-none flex flex-col items-center justify-center lg:grid h-full w-full lg:grid-cols-7"
				>
					<router-link
						:to="{ name: 'keyboards', params: { id: 1 } }"
						href=""
						class="flex flex-col overflow-hidden justify-center items-center relative h-full w-full lg:px-10 lg:col-span-4"
					>
						<img
							:src="front"
							alt=""
							class="my-5 scale-110 lg:scale-125 aspect-auto translate-x-3 translate-y-3 lg:translate-x-0 lg:translate-y-0 lg:my-0 z-20 lg:group-hover:translate-y-6 lg:group-hover:translate-x-6 lg:transition lg:duration-700"
						/>
						<img
							:src="back"
							alt=""
							class="absolute scale-110 lg:scale-100 z-10 aspect-auto -translate-x-3 -translate-y-3 lg:translate-x-0 lg:translate-y-0 lg:group-hover:-translate-y-6 lg:group-hover:-translate-x-6 lg:transition lg:duration-700"
						/>
						<div
							class="transition duration-700 opacity-40 absolute group-hover:scale-125 h-[12rem] w-[12rem] lg:h-[18rem] lg:w-[18rem] border border-black rounded-full"
						></div>
						<div
							class="transition duration-700 opacity-40 absolute group-hover:scale-110 h-[20rem] w-[20rem] lg:h-[26rem] lg:w-[26rem] border border-black rounded-full"
						></div>
						<div
							class="transition duration-700 opacity-40 absolute group-hover:scale-90 h-[26rem] w-[26rem] lg:h-[36rem] lg:w-[36rem] border border-black rounded-full"
						></div>
						<div
							class="transition duration-700 opacity-40 absolute group-hover:scale-125 h-[32rem] w-[32rem] lg:h-[46rem] lg:w-[46rem] border border-black rounded-full"
						></div>
					</router-link>
					<div
						class="h-full w-full flex flex-col justify-center lg:px-10 col-span-3 relative z-10 lg:pr-20"
					>
						<h2
							class="text-center lg:text-start text-5xl lg:text-6xl uppercase font-semibold"
						>
							ZX9 <br />
							Keyboard
						</h2>
						<p
							class="text-center lg:text-start mt-4 mb-8 lg:mb-10 tracking-wide"
						>
							Upgrade to premium keys that are phenominally built to deliver a
							truly remarkable typing feel.
						</p>
						<buttonSolid
							:to="{ name: 'keyboards', params: { id: 1 } }"
							content="SEE PRODUCT"
							add="font-semibold hover:rotate-x-3"
							class="self-center lg:self-start mb-10 lg:mb-0"
						/>
					</div>
				</div>
			</div>
			<div
				class="order-3 lg:order-none w-full lg:h-[16rem] flex flex-col justify-center items-center lg:items-start p-6 lg:px-6 gap-6 rounded-md text-black bg-k-grey lg:bg-white lg:row-span-2 lg:col-span-2"
			>
				<h2 class="text-3xl uppercase font-semibold">Kraken deskmat</h2>
				<buttonEmpty
					:to="{ name: 'deskmats', params: { id: 1 } }"
					content="see product"
				/>
			</div>
			<router-link
				:to="{ name: 'deskmats', params: { id: 1 } }"
				class="order-2 lg:order-none h-64 flex flex-col justify-center items-center lg:block lg:h-[16rem] overflow-hidden rounded-md text-black bg-k-grey lg:row-span-2 lg:col-span-4"
			>
				<img
					class="object-cover duration-200 grayscale scale-150"
					:src="kraken"
					alt=""
				/>
			</router-link>
			<div
				class="order-4 lg:order-none lg:h-[16rem] overflow-hidden rounded-md text-black bg-k-grey row-span-2 col-span-3"
			>
				<img class="object-cover scale-150" :src="keycaps" alt="" />
			</div>
			<div
				class="order-5 lg:order-none w-full lg:h-[16rem] flex flex-col justify-center items-center lg:items-start p-6 lg:px-16 gap-6 rounded-md text-black bg-k-grey row-span-2 col-span-3"
			>
				<h2 class="text-3xl uppercase font-semibold">Keycaps</h2>
				<buttonEmpty :to="{ path: 'keycaps' }" content="see all" />
			</div>
		</div>
	</div>
</template>
