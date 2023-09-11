<script setup lang="ts">
import switches from '/display/switch-array.webp'
</script>

<template>
	<div
		class="mt-20 flex h-full w-4/5 max-w-6xl flex-col items-center justify-center lg:mt-40 lg:h-[40rem]"
	>
		<div
			class="flex h-full w-full flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-32"
		>
			<div
				class="flex h-full flex-col items-center justify-center text-center lg:w-4/5 lg:text-start"
			>
				<h3 class="text-4xl font-semibold uppercase text-k-black lg:text-5xl">
					Bringing you the <br class="hidden xl:inline" />
					<span class="text-k-main">best</span> keyboards
				</h3>
				<p class="mt-10 tracking-wide text-black opacity-70 lg:mt-6">
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
				class="order-first aspect-square h-full w-full overflow-hidden rounded-md lg:order-last lg:aspect-auto"
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
