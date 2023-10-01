<script setup lang="ts">
import ButtonSolid from '../../../components/Buttons/button-solid.vue'
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
			class="fixed z-40 flex h-full w-full flex-col items-center backdrop-blur-sm"
			data-test="checkout-success-modal"
		>
			<router-link
				to="/"
				@click="handleClose()"
				class="absolute h-screen w-full bg-black opacity-40"
			></router-link>
			<div
				class="relative z-10 mx-4 mt-6 flex flex-col rounded-md bg-white p-10 md:mt-20 md:p-12"
			>
				<div
					class="absolute right-10 flex h-10 w-10 flex-shrink-0 flex-row items-center justify-center rounded-full bg-k-main md:static lg:h-20 lg:w-20"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="black"
						class="h-8 w-8 lg:h-14 lg:w-14"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M4.5 12.75l6 6 9-13.5"
						/>
					</svg>
				</div>
				<h2
					class="text-2xl font-bold uppercase text-black md:mt-6 lg:mt-8 lg:text-3xl"
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
					class="mb-4 mt-6 flex h-full w-full flex-col overflow-hidden rounded-lg lg:mb-6 lg:mt-8 lg:flex-row lg:items-center"
				>
					<div
						class="flex h-full w-full flex-col justify-center bg-k-grey px-4 py-6 lg:basis-4/6"
					>
						<div class="flex h-full w-full flex-row items-center">
							<img
								class="aspect-square h-24"
								:src="cartStore.getFirstItem.product.src"
								alt=""
								loading="lazy"
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
						class="flex flex-col justify-center bg-black px-6 py-6 lg:h-full lg:basis-2/6"
					>
						<div>
							<p
								class="text-md font-semibold uppercase tracking-wide opacity-90"
							>
								Grand Total
							</p>
							<p class="text-md font-semibold lg:text-lg">
								$ {{ cartStore.getGrandTotal }}
							</p>
						</div>
					</div>
				</div>
				<ButtonSolid
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
