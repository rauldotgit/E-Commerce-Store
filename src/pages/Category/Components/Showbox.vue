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
		class="grid grid-cols-2 grid-rows-1 gap-20 justify-between w-4/5 max-w-6xl mt-32"
	>
		<div
			class="flex flex-col justify-center pb-6 row-start-1 col-span-1"
			:class="flip === true ? 'col-start-1' : 'col-start-2'"
		>
			<p
				v-if="props.item.nu"
				class="uppercase tracking-broad font-light text-black"
			>
				new product
			</p>
			<h1 class="uppercase text-6xl text-black mt-4 font-semibold">
				{{ props.item.header }} <br />
				{{ props.item.subheader }}
			</h1>
			<p class="pr-20 mt-4 mb-10 text-black opacity-60">
				{{ props.item.text }}
			</p>
			<div class="flex flex-row items-center gap-4">
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
			class="cursor-pointer active:translate-y-1 overflow-hidden col-span-1 rounded"
			:class="flip === true ? 'col-start-2' : 'col-start-1'"
		>
			<img
				loading="lazy"
				class="h-full object-cover relative aspect-square"
				:src="props.item.src"
				alt=""
			/>
		</router-link>
	</div>
</template>
