<script setup lang="ts">
import switches from '/display/switch-array.webp'
</script>

<template>
	<div
		class="mt-20 lg:mt-40 flex flex-col justify-center items-center h-full lg:h-[40rem] w-4/5 max-w-6xl"
	>
		<div
			class="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-10 lg:gap-32 h-full w-full"
		>
			<div
				class="text-center lg:text-start flex flex-col justify-center items-center h-full lg:w-4/5"
			>
				<h3 class="uppercase text-4xl lg:text-5xl text-k-black font-semibold">
					Bringing you the <br class="hidden lg:block" />
					<span class="text-k-main">best</span> keyboards
				</h3>
				<p class="text-black opacity-70 mt-10 lg:mt-6 tracking-wide">
					Located at the heart of Berlin City, KIIIBS is the premier store for
					high end keyboards, keycaps, desk mats and other KIIIBS accessories.
					We have a large showroom and luxury demonstration rooms available for
					you to browse and experience a wide range of our products. <br />
					<br />
					Stop by our store to meet some of the fantastic people who make KIIIBS
					the best place to buy your PC setup equipment.
				</p>
			</div>
			<div
				class="lg:aspect-auto aspect-square h-full w-full rounded-md overflow-hidden order-first lg:order-last"
			>
				<img
					loading="lazy"
					class="h-full w-full object-cover"
					:src="switches"
					alt=""
				/>
			</div>
		</div>
	</div>
</template>
