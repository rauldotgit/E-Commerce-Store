<script lang="ts" setup>
import ButtonSolid from '../../components/Buttons/button-solid.vue'
</script>

<template>
	<main
		class="flex h-screen w-screen flex-col items-center justify-center bg-black text-white"
	>
		<div
			class="flex max-h-screen flex-col items-center justify-center gap-6 p-10 text-center lg:w-1/3"
		>
			<h1 class="text-7xl font-black text-k-main">404</h1>
			<p class="text-md tracking-widest opacity-70">
				Stare at the abyss and the abyss stares back at you!
			</p>
			<ButtonSolid
				to="/"
				:color="'light'"
				:content="'To Safety'"
				:size="'big'"
				add="font-bold mt-8"
			/>
		</div>
	</main>
</template>
