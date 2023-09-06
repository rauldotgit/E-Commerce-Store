<script setup lang="ts">
import facebook from '/icons/facebook.svg'
import twitter from '/icons/twitter.svg'
import instagram from '/icons/instagram.svg'
</script>

<template>
	<div
		class="relative flex flex-col items-center h-full w-screen mt-20 lg:mt-40 bg-black"
	>
		<div
			class="w-screen flex flex-row justify-center lg:justify-start lg:w-4/5 lg:max-w-6xl"
		>
			<div
				id="colorStrip"
				class="max-w-6xl top-0 absolute h-1 w-20 bg-k-main"
			></div>
		</div>
		<div
			id="container"
			class="flex flex-col justify-center my-10 h-full w-4/5 max-w-6xl"
		>
			<div
				id="titleNav"
				class="flex flex-col lg:flex-row justify-between items-center mb-10"
			>
				<h3
					class="hover:text-k-main hover:scale-110 transition duration-300 cursor-pointer text-white text-4xl lg:text-3xl font-bold subpixel-antialiased mb-8 lg:mb-0"
				>
					KIIIBS
				</h3>
				<nav
					class="flex lg:flex-row flex-col items-center lg:items-start justify-between gap-6 lg:gap-10"
				>
					<router-link
						class="font-semibold tracking-wider hover:text-k-main transition duration-300 uppercase text-white"
						to="/"
						>Home
					</router-link>
					<router-link
						class="font-semibold tracking-wider hover:text-k-main transition duration-300 uppercase text-white"
						to="/keyboards"
						>Keyboards
					</router-link>
					<router-link
						class="font-semibold tracking-wider hover:text-k-main transition duration-300 uppercase text-white"
						to="/keycaps"
						>Keycaps
					</router-link>
					<router-link
						class="font-semibold tracking-wider hover:text-k-main transition duration-300 uppercase text-white"
						to="/deskmats"
						>Deskmats
					</router-link>
				</nav>
			</div>
			<div
				id="textSocials"
				class="flex flex-col items-center lg:items-start lg:flex-row justify-between"
			>
				<p
					class="text-center lg:text-left lg:w-1/2 tracking-wide opacity-70 mb-10 lg:mb-0"
				>
					KIIIBS is an all in one stop to fulfill your mechanical keyboard
					needs. We're a small team of coding lovers and typing specialists who
					are devoted to helping you get the most out of you setup. Come and
					visit our demo facility - we're open 7 days a week.
				</p>
				<nav class="lg:self-end flex flex-row gap-4">
					<a class="hover:-translate-y-0.5 transition duration-300" href="">
						<img class="h-6 aspect-square" :src="facebook" alt="" />
					</a>
					<a class="hover:-translate-y-0.5 transition duration-300" href="">
						<img class="h-6 aspect-square" :src="twitter" alt="" />
					</a>
					<a class="hover:-translate-y-0.5 transition duration-300" href="">
						<img class="h-6 aspect-square" :src="instagram" alt="" />
					</a>
				</nav>
			</div>
			<p
				class="text-center lg:text-start tracking-wide mt-16 text-sm font-semibold text-white opacity-60"
			>
				Copyright 2023. All Rights Reserved
			</p>
		</div>
	</div>
</template>
