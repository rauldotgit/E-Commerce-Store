<script lang="ts" setup>
import { useFormStore } from '../../../pinia/formStore'
const formStore = useFormStore()

const props = defineProps<{
	type: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url'
	validator: 'empty' | 'true' | 'false'

	// as in html id tag - must correspond to data name in formStore storage
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
		<label class="mb-1 font-bold text-black" :for="props.id">{{
			props.label
		}}</label>
		<input
			v-model="formStore[props.id]"
			:autocomplete="props.autocomplete"
			:class="[
				props.validator === 'false' && 'border-red-500',
				props.validator !== 'true' && 'focus:border-red-500',
			]"
			class="rounded border border-black border-opacity-60 bg-white p-3 font-Manrope font-semibold text-black outline-none focus:border-k-main"
			:type="props.type"
			:id="props.id"
			:maxlength="props.maxLength"
			:placeholder="props.placeholder"
			:required="props.required"
		/>
		<p
			v-show="props.showError && props.validator !== 'true'"
			class="text-sm text-red-500"
		>
			Missing or incorrect.
		</p>
	</div>
</template>
