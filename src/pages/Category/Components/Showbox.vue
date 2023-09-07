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
		v-once
		class="flex flex-col items-center lg:grid lg:grid-cols-2 lg:grid-rows-1 gap-10 lg:gap-20 w-4/5 max-w-6xl mt-16 lg:mt-32"
	>
		<div
			class="flex flex-col items-center lg:block pb-6 lg:row-start-1 lg:col-span-1"
			:class="flip === true ? 'lg:col-start-1' : 'lg:col-start-2'"
		>
			<p
				v-if="props.item.nu"
				class="uppercase text-sm lg:text-md tracking-broad font-light text-black"
			>
				new product
			</p>
			<h1
				class="uppercase text-4xl text-center lg:text-start lg:text-6xl text-black mt-4 font-semibold"
			>
				{{ props.item.header }} <br />
				{{ props.item.subheader }}
			</h1>
			<p
				class="lg:pr-20 mt-4 mb-10 text-center lg:text-start text-black opacity-60"
			>
				{{ props.item.text }}
			</p>
			<div
				class="flex flex-row justify-center lg:justify-normal items-center gap-4"
			>
				<buttonSolid
					:to="{ name: props.category, params: { id: props.item.id } }"
					color="light"
					add="font-bold"
				/>
				<buttonQuickAdd
					v-if="cartStore.showQuickAdd"
					@add-to-cart="cartStore.addToCart(props.item)"
				/>
			</div>
		</div>
		<router-link
			:to="{ name: props.category, params: { id: props.item.id } }"
			class="cursor-pointer active:translate-y-1 overflow-hidden col-span-1 rounded order-first lg:-order-none"
			:class="flip === true ? 'col-start-2' : 'col-start-1'"
		>
			<img
				loading="lazy"
				class="w-full object-cover relative aspect-square"
				:src="props.item.src"
				alt=""
			/>
		</router-link>
	</div>
</template>
