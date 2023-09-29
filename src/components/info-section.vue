<script setup lang="ts">
import switchesImage from '/display/switch-array.webp'
</script>

<template>
	<section
		class="mt-20 flex h-full flex-col items-center justify-center md:mt-32 lg:mt-40"
	>
		<div
			class="flex h-full w-4/5 max-w-6xl flex-col items-center gap-10 md:h-[38rem] md:w-11/12 md:flex-row md:items-start md:justify-between md:gap-32 lg:h-[40rem] lg:w-4/5"
		>
			<div
				class="flex h-full flex-col items-center justify-center text-center md:w-4/5 md:items-start md:text-start"
			>
				<h3 class="text-4xl font-semibold uppercase text-k-black md:text-5xl">
					Bringing you the <br class="hidden xl:inline" />
					<span class="text-k-main">best</span> keyboards
				</h3>
				<p class="mt-10 tracking-wide text-black opacity-70 md:mt-6">
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
				class="order-first aspect-square h-full w-full overflow-hidden rounded-md md:order-last md:aspect-auto"
			>
				<img
					loading="lazy"
					class="h-full w-full object-cover"
					:src="switchesImage"
					alt=""
					srcset=""
				/>
			</div>
		</div>
	</section>
</template>
