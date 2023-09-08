<script lang="ts" setup>
import buttonSolid from './All/Buttons/button-solid.vue'
</script>

<template>
	<div
		class="bg-black text-white flex flex-col justify-center items-center w-screen h-screen"
	>
		<div
			class="flex flex-col items-center justify-center text-center max-h-screen p-10 lg:w-1/3 gap-6"
		>
			<h1 class="text-k-main text-7xl font-black">404</h1>
			<p class="text-md tracking-widest opacity-70">
				Stare at the abyss and the abyss stares back at you!
			</p>
			<buttonSolid
				to="/"
				:color="'light'"
				:content="'To Safety'"
				:size="'big'"
				add="font-bold mt-8"
			/>
		</div>
	</div>
</template>
