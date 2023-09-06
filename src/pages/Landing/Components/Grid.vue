<script setup lang="ts">
import buttonEmpty from '../../All/Buttons/button-empty.vue'
import buttonSolid from '../../All/Buttons/button-solid.vue'
import kraken from '/products/deskmats/deskmat-kraken.webp'
import keycaps from '/display/keycaps.webp'
import front from '/display/keeb-front.webp'
import back from '/display/front.webp'
</script>

<template>
	<div
		class="mt-12 -mb-10 lg:flex flex-col justify-center items-center w-full h-screen hidden"
	>
		<div class="grid grid-cols-6 gap-8 h-[63rem] grid-rows-7 w-4/5 max-w-6xl">
			<div
				class="h-[31rem] rounded-md text-black bg-k-main row-span-3 col-span-full"
			>
				<div class="group grid h-full w-full grid-cols-7">
					<router-link
						:to="{ name: 'keyboards', params: { id: 1 } }"
						href=""
						class="flex flex-col overflow-hidden justify-center items-center relative h-full w-full px-10 col-span-4 image"
					>
						<img
							:src="front"
							alt=""
							class="absolute scale-90 z-40 group-hover:translate-y-6 group-hover:translate-x-6 transition duration-700"
						/>
						<img
							:src="back"
							alt=""
							class="absolute z-30 group-hover:-translate-y-6 group-hover:-translate-x-6 transition duration-700"
						/>
						<div
							class="transition duration-700 opacity-40 absolute group-hover:scale-110 h-[20rem] w-[20rem] border border-black rounded-full z-20"
						></div>
						<div
							class="transition duration-700 opacity-40 absolute group-hover:scale-110 h-[26rem] w-[26rem] border border-black rounded-full z-20"
						></div>
						<div
							class="transition duration-700 opacity-40 absolute group-hover:scale-90 h-[36rem] w-[36rem] border border-black rounded-full z-20"
						></div>
						<div
							class="transition duration-700 opacity-40 absolute group-hover:scale-125 h-[46rem] w-[46rem] border border-black rounded-full z-20"
						></div>
					</router-link>
					<div
						class="h-full w-full flex flex-col justify-center px-10 col-span-3 relative z-10 pr-20"
					>
						<h2 class="text-6xl uppercase font-semibold">
							ZX9 <br />
							Keyboard
						</h2>
						<p class="mt-4 mb-10 tracking-wide">
							Upgrade to premium keys that are phenominally built to deliver a
							truly remarkable typing feel.
						</p>
						<buttonSolid
							:to="{ name: 'keyboards', params: { id: 1 } }"
							content="SEE PRODUCT"
							add="font-semibold hover:rotate-x-3"
						/>
					</div>
				</div>
			</div>
			<div
				class="h-[16rem] flex flex-col justify-center px-6 gap-6 rounded-md text-black bg-white row-span-2 col-span-2"
			>
				<h2 class="text-3xl uppercase font-semibold">Kraken deskmat</h2>
				<buttonEmpty
					:to="{ name: 'deskmats', params: { id: 1 } }"
					content="see product"
				/>
			</div>
			<router-link
				:to="{ name: 'deskmats', params: { id: 1 } }"
				class="h-[16rem] overflow-hidden rounded-md text-black bg-k-grey row-span-2 col-span-4"
			>
				<img
					class="object-cover duration-200 grayscale scale-150"
					:src="kraken"
					alt=""
				/>
			</router-link>
			<div
				class="h-[16rem] overflow-hidden rounded-md text-black bg-k-grey row-span-2 col-span-3"
			>
				<img class="object-cover scale-150" :src="keycaps" alt="" />
			</div>
			<div
				class="h-[16rem] flex flex-col justify-center px-16 gap-6 rounded-md text-black bg-k-grey row-span-2 col-span-3"
			>
				<h2 class="text-3xl uppercase font-semibold">Keycaps</h2>
				<buttonEmpty :to="{ path: 'keycaps' }" content="see product" />
			</div>
		</div>
	</div>
</template>
