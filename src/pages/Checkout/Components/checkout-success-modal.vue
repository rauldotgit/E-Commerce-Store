<script setup lang="ts">
import buttonSolid from '../../All/Buttons/button-solid.vue'
import { useCartStore } from '../../../pinia/cartStore.ts'
import { useFormStore } from '../../../pinia/formStore'
import { onBeforeMount, onBeforeUnmount } from 'vue'

const cartStore = useCartStore()
const formStore = useFormStore()

const handleClose = () => {
	cartStore.clearCart()
	formStore.bannerOff()
}

onBeforeMount(() => {
	if (formStore.showBanner) {
		document.body.classList.add('overflow-y-hidden')
	}
})

onBeforeUnmount(() => {
	document.body.classList.remove('overflow-y-hidden')
})
</script>
<template>
	<Transition>
		<div
			class="fixed z-40 flex h-screen w-screen flex-col items-center backdrop-blur-sm"
			data-test="checkout-success-modal"
		>
			<router-link
				to="/"
				@click="handleClose()"
				class="absolute h-screen w-full bg-black opacity-40"
			></router-link>
			<div
				class="z-10 m-6 flex flex-col rounded-md bg-white p-10 lg:top-1/4 lg:m-0 lg:mt-20 lg:aspect-square"
			>
				<div
					class="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-k-main lg:h-20 lg:w-20"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="black"
						class="h-10 w-10 lg:h-14 lg:w-14"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M4.5 12.75l6 6 9-13.5"
						/>
					</svg>
				</div>
				<h2
					class="mt-6 text-2xl font-bold uppercase text-black lg:mt-8 lg:text-3xl"
				>
					thank you <br />
					for your order
				</h2>
				<p
					class="text-md mt-4 font-semibold text-black opacity-60 lg:mt-6 lg:text-lg"
				>
					You will receive an email confirmation shortly.
				</p>
				<div
					class="mb-4 mt-6 flex h-fit w-full flex-col overflow-hidden rounded-lg lg:mb-6 lg:mt-8 lg:flex-row"
				>
					<div
						class="flex h-full w-full flex-col justify-center bg-k-grey px-8 py-4"
					>
						<div class="flex h-full w-full flex-row items-center">
							<img
								class="aspect-square h-24"
								:src="cartStore.getFirstItem.product.src"
								alt=""
							/>
							<div class="ml-3 flex flex-col items-start justify-center">
								<p class="text-lg font-bold text-black">
									{{ cartStore.getFirstItem.product.header }}
								</p>
								<p class="text-lg font-bold text-black opacity-60">
									${{ cartStore.getFirstItem.product.price }}
								</p>
							</div>
							<p
								class="ml-auto place-self-center text-lg font-bold text-black opacity-60"
							>
								x{{ cartStore.getFirstItem.amount }}
							</p>
						</div>
						<hr v-if="cartStore.getUniqueItems > 1" />
						<p
							v-if="cartStore.getUniqueItems > 1"
							class="mt-2 text-center font-semibold text-black opacity-70"
						>
							and {{ cartStore.getUniqueItems - 1 }} other item<span
								v-show="cartStore.getUniqueItems > 2"
								>s</span
							>
						</p>
					</div>
					<div
						class="flex h-full w-full flex-col justify-center bg-black p-6 lg:w-4/5 lg:p-0"
					>
						<p
							class="text-md uppercase tracking-wide opacity-60 lg:ml-10 lg:text-lg"
						>
							Grand Total
						</p>
						<p class="text-md font-semibold lg:ml-10 lg:text-lg">
							$ {{ cartStore.getGrandTotal }}
						</p>
					</div>
				</div>
				<buttonSolid
					to="/"
					@click="handleClose()"
					color="light"
					content="back to home"
					class="mt-6 self-center font-bold"
					data-test="checkout-success-modal-button"
				/>
			</div>
		</div>
	</Transition>
</template>
