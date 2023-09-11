<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import buttonSolid from '../../All/Buttons/button-solid.vue'
import { product } from '../../../data/products'
import buttonQuickAdd from '../../All/Buttons/button-quick-add.vue'
import { useCartStore } from '../../../pinia/cartStore.ts'

const cartStore = useCartStore()

const props = defineProps<{
	category: string
	item: product
}>()

const flip = computed(() => {
	return props.item.id % 2 === 0 ? false : true
})

let show = ref(false)

onMounted(() => {
	show.value = true
})
</script>

<template>
	<div
		class="mt-16 flex w-4/5 max-w-6xl flex-col items-center gap-10 lg:mt-32 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-20"
	>
		<div
			class="flex flex-col items-center pb-6 lg:col-span-1 lg:row-start-1 lg:block"
			:class="flip === true ? 'lg:col-start-1' : 'lg:col-start-2'"
		>
			<p
				v-if="props.item.nu"
				class="lg:text-md text-sm font-light uppercase tracking-broad text-black"
			>
				new product
			</p>
			<h1
				class="mt-4 text-center text-4xl font-semibold uppercase text-black lg:text-start lg:text-6xl"
			>
				{{ props.item.header }} <br />
				{{ props.item.subheader }}
			</h1>
			<p
				class="mb-10 mt-4 text-center text-black opacity-60 lg:pr-20 lg:text-start"
			>
				{{ props.item.text }}
			</p>
			<div
				class="flex flex-row items-center justify-center gap-4 lg:justify-normal"
			>
				<buttonSolid
					:to="{ name: props.category, params: { id: props.item.id } }"
					color="light"
					add="font-bold"
				/>
				<buttonQuickAdd
					v-if="cartStore.showQuickAdd"
					@add-to-cart="cartStore.addToCart(props.item)"
					:data-test="`quick-add-${props.item.category}-${props.item.id}`"
				/>
			</div>
		</div>
		<router-link
			:to="{ name: props.category, params: { id: props.item.id } }"
			class="order-first col-span-1 cursor-pointer overflow-hidden rounded active:translate-y-1 lg:-order-none"
			:class="flip === true ? 'col-start-2' : 'col-start-1'"
		>
			<img
				loading="lazy"
				class="relative aspect-square w-full object-cover"
				:src="props.item.src"
				alt=""
			/>
		</router-link>
	</div>
</template>
