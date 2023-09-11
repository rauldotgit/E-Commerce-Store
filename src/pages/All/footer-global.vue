<script setup lang="ts">
import facebook from '/icons/facebook.svg'
import twitter from '/icons/twitter.svg'
import instagram from '/icons/instagram.svg'
</script>

<template>
	<div
		class="relative mt-20 flex h-full w-screen flex-col items-center bg-black lg:mt-40"
	>
		<div
			class="flex w-screen flex-row justify-center lg:w-4/5 lg:max-w-6xl lg:justify-start"
		>
			<div
				id="colorStrip"
				class="absolute top-0 h-1 w-20 max-w-6xl bg-k-main"
			></div>
		</div>
		<div
			id="container"
			class="my-10 flex h-full w-4/5 max-w-6xl flex-col justify-center"
		>
			<div
				id="titleNav"
				class="mb-10 flex flex-col items-center justify-between lg:flex-row"
			>
				<h3
					class="mb-8 cursor-pointer text-4xl font-bold text-white subpixel-antialiased transition duration-300 hover:scale-110 hover:text-k-main lg:mb-0 lg:text-3xl"
				>
					KIIIBS
				</h3>
				<nav
					class="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-start lg:gap-10"
				>
					<router-link
						class="font-semibold uppercase tracking-wider text-white transition duration-300 hover:text-k-main"
						to="/"
						>Home
					</router-link>
					<router-link
						class="font-semibold uppercase tracking-wider text-white transition duration-300 hover:text-k-main"
						to="/keyboards"
						>Keyboards
					</router-link>
					<router-link
						class="font-semibold uppercase tracking-wider text-white transition duration-300 hover:text-k-main"
						to="/keycaps"
						>Keycaps
					</router-link>
					<router-link
						class="font-semibold uppercase tracking-wider text-white transition duration-300 hover:text-k-main"
						to="/deskmats"
						>Deskmats
					</router-link>
				</nav>
			</div>
			<div
				id="textSocials"
				class="flex flex-col items-center justify-between lg:flex-row lg:items-start"
			>
				<p
					class="mb-10 text-center tracking-wide opacity-70 lg:mb-0 lg:w-1/2 lg:text-left"
				>
					KIIIBS is an all in one stop to fulfill your mechanical keyboard
					needs. We're a small team of coding lovers and typing specialists who
					are devoted to helping you get the most out of you setup. Come and
					visit our demo facility - we're open 7 days a week.
				</p>
				<nav class="flex flex-row gap-4 lg:self-end">
					<a class="transition duration-300 hover:-translate-y-0.5" href="">
						<img class="aspect-square h-6" :src="facebook" alt="" />
					</a>
					<a class="transition duration-300 hover:-translate-y-0.5" href="">
						<img class="aspect-square h-6" :src="twitter" alt="" />
					</a>
					<a class="transition duration-300 hover:-translate-y-0.5" href="">
						<img class="aspect-square h-6" :src="instagram" alt="" />
					</a>
				</nav>
			</div>
			<p
				class="mt-16 text-center text-sm font-semibold tracking-wide text-white opacity-60 lg:text-start"
			>
				Copyright 2023. All Rights Reserved
			</p>
		</div>
	</div>
</template>
