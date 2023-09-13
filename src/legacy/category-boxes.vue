<script setup lang="ts">
import keeb from '/products/categories/category-keyboards.webp'
import keycap from '/products/categories/category-keycaps.webp'
import deskmat from '/products/categories/category-deskmats.webp'
import arrow from '/icons/right-arrow.svg'
</script>

<template>
	<div
		class="mt-16 flex h-full w-full flex-col items-center bg-white md:mt-24 lg:mt-32"
	>
		<div
			class="grid h-screen w-4/5 grid-cols-1 grid-rows-3 gap-2 md:flex md:w-11/12 md:max-w-6xl md:flex-row md:justify-center md:gap-6 lg:w-4/5"
		>
			<router-link
				to="/keyboards"
				class="group grid h-full w-full grid-cols-1 grid-rows-3 md:gap-0"
			>
				<div
					class="top-2 z-10 col-span-full row-span-2 row-start-1 place-self-center overflow-hidden transition duration-300 group-hover:-translate-y-1 md:mb-0"
				>
					<img class="object-cover" :src="keeb" alt="keyboard category image" />
				</div>
				<div
					class="col-span-full row-span-2 row-start-2 rounded-lg bg-k-grey duration-300 group-hover:translate-y-1"
				></div>
				<div
					class="z-10 col-span-full row-span-1 row-start-3 mb-5 flex flex-col items-center self-end"
				>
					<h2 class="text-center text-xl font-bold uppercase text-black">
						Keyboards
					</h2>
					<div
						class="mt-2 flex flex-row items-center gap-2 text-sm font-semibold uppercase text-black opacity-50"
					>
						<p>shop</p>
						<img :src="arrow" alt="" />
					</div>
				</div>
			</router-link>
			<router-link
				to="/keycaps"
				class="group grid h-full w-full grid-cols-1 grid-rows-3 md:gap-0"
			>
				<div
					class="z-10 col-span-full row-span-2 row-start-1 place-self-center overflow-hidden transition duration-300 group-hover:-translate-y-1 md:mb-0"
				>
					<img
						class="scale-75 object-cover md:scale-100"
						:src="keycap"
						alt=""
					/>
				</div>
				<div
					class="col-span-full row-span-2 row-start-2 rounded-lg bg-k-grey duration-300 group-hover:translate-y-1"
				></div>
				<div
					class="z-10 col-span-full row-span-1 row-start-3 mb-5 flex flex-col items-center self-end"
				>
					<h2 class="text-center text-xl font-bold uppercase text-black">
						Keycaps
					</h2>
					<div
						class="mt-2 flex flex-row items-center gap-2 text-sm font-semibold uppercase text-black opacity-50"
					>
						<p>shop</p>
						<img :src="arrow" alt="" />
					</div>
				</div>
			</router-link>
			<router-link
				to="/deskmats"
				class="group grid h-full w-full grid-cols-1 grid-rows-3 md:gap-0"
			>
				<div
					class="z-10 col-span-full row-span-2 row-start-1 -mb-2 place-self-center overflow-hidden transition duration-300 group-hover:-translate-y-1"
				>
					<img class="object-cover md:scale-110" :src="deskmat" alt="" />
				</div>
				<div
					class="col-span-full row-span-2 row-start-2 rounded-lg bg-k-grey duration-300 group-hover:translate-y-1"
				></div>
				<div
					class="z-10 col-span-full row-span-1 row-start-3 mb-5 flex flex-col items-center self-end"
				>
					<h2 class="text-center text-xl font-bold uppercase text-black">
						Deskmats
					</h2>
					<div
						class="mt-2 flex flex-row items-center gap-2 text-sm font-semibold uppercase text-black opacity-50"
					>
						<p>shop</p>
						<img :src="arrow" alt="" />
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>
