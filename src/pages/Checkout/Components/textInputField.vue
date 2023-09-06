<script lang="ts" setup>
const props = defineProps<{
	type: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url'
	formData: any
	validator: 'empty' | 'true' | 'false'
	id: string
	label: string
	containerClass?: string
	placeholder?: string
	minLength?: string
	maxLength?: string
	autocomplete?: 'off'
	required?: boolean
	showError: boolean
}>()
</script>
<template>
	<div class="flex flex-col" :class="containerClass">
		<label class="text-black font-bold mb-1" :for="props.id">{{
			props.label
		}}</label>
		<input
			v-model="props.formData[props.id]"
			:autocomplete="props.autocomplete"
			:class="[
				props.validator === 'false' && 'border-red-500',
				props.validator !== 'true' && 'focus:border-red-500',
			]"
			class="text-black focus:border-k-main outline-none font-semibold font-Manrope p-3 bg-white border border-black border-opacity-60 rounded"
			:type="props.type"
			:id="props.id"
			:maxlength="props.maxLength"
			:placeholder="props.placeholder"
			:required="props.required"
		/>
		<p
			v-show="props.showError && props.validator !== 'true'"
			class="text-red-500 text-sm"
		>
			Missing or incorrect.
		</p>
	</div>
</template>
