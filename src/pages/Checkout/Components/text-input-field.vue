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
	errorMessage: string
}>()
</script>
<template>
	<div
		class="mb-2 flex w-full flex-col"
		:class="containerClass"
		:data-test="`text-input-${props.id}`"
	>
		<label class="mb-1 font-bold text-black" :for="props.id">
			{{ props.label }}
			<span v-if="props.required" class="text-sm"> *</span>
		</label>
		<div class="relative h-full w-full">
			<input
				v-model="formStore[props.id]"
				:autocomplete="props.autocomplete"
				:class="[
					props.validator === 'false' && 'border-red-500',
					props.validator === 'false' && 'focus:border-red-500',
				]"
				class="w-full rounded border border-black border-opacity-60 bg-white p-3 font-Manrope font-semibold text-black outline-none focus:border-k-main"
				:type="props.type"
				:id="props.id"
				:maxlength="props.maxLength"
				:placeholder="props.placeholder"
				:required="props.required"
				:data-test="`text-input-field-${props.id}`"
			/>
			<div class="absolute ml-1 flex w-full text-sm text-red-500">
				<!-- Required Message -->
				<p
					v-show="
						props.required &&
						formStore.showErrors &&
						props.validator === 'empty'
					"
				>
					Required.
				</p>

				<!-- Error Message -->
				<p v-show="props.validator === 'false'">
					{{ props.errorMessage }}
				</p>
			</div>
		</div>
	</div>
</template>
