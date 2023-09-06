<script setup lang="ts">
// import speaker from '/products/speaker.svg'
import keeb from '/products/categories/category-keyboards.webp'
import keycap from '/products/categories/category-keycaps.webp'
import deskmat from '/products/categories/category-deskmats.webp'
import arrow from '/icons/right-arrow.svg'
</script>

<template>
	<div class="mt-16 lg:mt-32 flex flex-col items-center w-full h-full bg-white">
		<div
			class="grid grid-cols-1 grid-rows-3 h-screen lg:flex lg:flex-row lg:justify-center lg:gap-6 gap-10 w-4/5 lg:max-w-6xl lg:h-[17rem]"
		>
			<router-link
				to="/keyboards"
				class="group grid grid-rows-3 grid-cols-1 w-full h-full gap-10"
			>
				<div
					class="mb-4 overflow-hidden top-2 z-10 transition duration-300 group-hover:-translate-y-1 col-span-full row-start-1 row-span-2 place-self-center"
				>
					<img class="object-cover" :src="keeb" alt="" />
				</div>
				<div
					class="duration-300 group-hover:translate-y-1 col-span-full row-start-2 row-span-2 rounded-lg bg-k-grey"
				></div>
				<div
					class="col-span-full row-start-3 row-span-1 flex flex-col items-center self-end mb-5"
				>
					<h2 class="text-center text-black text-xl font-bold uppercase">
						Keyboards
					</h2>
					<div
						class="flex flex-row font-semibold items-center gap-2 text-black opacity-50 uppercase text-sm mt-2"
					>
						<p>shop</p>
						<img :src="arrow" alt="" />
					</div>
				</div>
			</router-link>
			<router-link
				to="/keycaps"
				class="group grid grid-rows-3 grid-cols-1 w-full h-full gap-10"
			>
				<div
					class="mb-4 overflow-hidden col-span-full row-start-1 row-span-2 place-self-center z-10 transition duration-300 group-hover:-translate-y-1"
				>
					<img class="object-cover scale-75" :src="keycap" alt="" />
				</div>
				<div
					class="duration-300 group-hover:translate-y-1 col-span-full row-start-2 row-span-2 rounded-lg bg-k-grey"
				></div>
				<div
					class="col-span-full row-start-3 row-span-1 flex flex-col items-center self-end mb-5"
				>
					<h2 class="text-center text-black text-xl font-bold uppercase">
						Keycaps
					</h2>
					<div
						class="flex flex-row font-semibold items-center gap-2 text-black opacity-50 uppercase text-sm mt-2"
					>
						<p>shop</p>
						<img :src="arrow" alt="" />
					</div>
				</div>
			</router-link>
			<router-link
				to="/deskmats"
				class="group grid grid-rows-3 grid-cols-1 w-full h-full gap-10"
			>
				<div
					class="z-10 overflow-hidden transition duration-300 group-hover:-translate-y-1 col-span-full row-start-1 row-span-2 place-self-center"
				>
					<img class="object-cover lg:scale-110" :src="deskmat" alt="" />
				</div>
				<div
					class="duration-300 group-hover:translate-y-1 col-span-full row-start-2 row-span-2 rounded-lg bg-k-grey"
				></div>
				<div
					class="col-span-full row-start-3 row-span-1 flex flex-col items-center self-end mb-5"
				>
					<h2 class="text-center text-black text-xl font-bold uppercase">
						Deskmats
					</h2>
					<div
						class="flex flex-row font-semibold items-center gap-2 text-black opacity-50 uppercase text-sm mt-2"
					>
						<p>shop</p>
						<img :src="arrow" alt="" />
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>
