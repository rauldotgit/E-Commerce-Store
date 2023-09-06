<script setup lang="ts"></script>
<template>
	<div class="w-4/5 max-w-6xl mt-24 mb-8">
		<a
			@click="$router.go(-1)"
			class="font-semibold cursor-pointer hover:opacity-100 active:translate-y-0.5 text-start text-black opacity-60"
			>Go Back</a
		>
	</div>
</template>
