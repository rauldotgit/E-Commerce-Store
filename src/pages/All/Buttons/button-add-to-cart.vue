<!-- setup language -->
<script setup lang="ts">
type namedLocation = {
	name?: string
	path?: string
	params?: {
		id: number | string
	}
}

interface Props {
	content?: string
	add?: string
	to?: namedLocation | string
}

const props = withDefaults(defineProps<Props>(), {
	content: 'to product',
	to: '/',
})
</script>

<template>
	<router-link :to="props.to">
		<button
			class="hover:shadow-md active:translate-y-1 tracking-wide transition duration-100 hover:translate-y-0.5 w-52 text-k-black border-2 border-k-black font-bold uppercase px-10 py-3"
			:class="props.add"
		>
			{{ props.content }}
		</button>
	</router-link>
</template>
