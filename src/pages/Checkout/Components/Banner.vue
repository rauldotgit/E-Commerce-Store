<script setup lang="ts">
import buttonSolid from '../../All/Buttons/button-solid.vue'
import { useCartStore } from '../../../pinia/cartStore.ts'
import { useFormStore } from '../../../pinia/formStore'

const cartStore = useCartStore()
const formStore = useFormStore()

const handleClose = () => {
	cartStore.clearCart()
	formStore.bannerOff()
}
</script>
<template>
	<Transition>
		<div
			class="fixed flex flex-col items-center w-screen h-screen backdrop-blur-sm z-40"
		>
			<router-link
				to="/"
				@click="handleClose()"
				class="absolute h-screen w-full bg-black opacity-40"
			></router-link>
			<div
				class="p-10 m-6 lg:m-0 flex flex-col lg:top-1/4 rounded-md bg-white lg:aspect-square z-10"
			>
				<div
					class="h-12 w-12 lg:h-20 lg:w-20 flex flex-col justify-center items-center rounded-full bg-k-main"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="black"
						class="w-10 h-10 lg:w-14 lg:h-14"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M4.5 12.75l6 6 9-13.5"
						/>
					</svg>
				</div>
				<h2
					class="uppercase text-black text-2xl lg:text-3xl font-bold mt-6 lg:mt-8"
				>
					thank you <br />
					for your order
				</h2>
				<p
					class="text-black font-semibold opacity-60 text-md lg:text-lg mt-4 lg:mt-6"
				>
					You will receive an email confirmation shortly.
				</p>
				<div
					class="flex flex-col lg:flex-row rounded-lg overflow-hidden mt-6 lg:mt-8 w-full h-fit mb-4 lg:mb-6"
				>
					<div
						class="bg-k-grey flex flex-col justify-center w-full h-full px-8 py-4"
					>
						<div class="flex flex-row items-center w-full h-full">
							<img
								class="h-24 aspect-square"
								:src="cartStore.getFirstItem.product.src"
								alt=""
							/>
							<div class="flex flex-col justify-center items-start ml-3">
								<p class="text-black font-bold text-lg">
									{{ cartStore.getFirstItem.product.header }}
								</p>
								<p class="font-bold text-black text-lg opacity-60">
									${{ cartStore.getFirstItem.product.price }}
								</p>
							</div>
							<p
								class="text-black opacity-60 ml-auto font-bold text-lg place-self-center"
							>
								x{{ cartStore.getFirstItem.amount }}
							</p>
						</div>
						<hr v-if="cartStore.getUniqueItems > 1" />
						<p
							v-if="cartStore.getUniqueItems > 1"
							class="text-black mt-2 text-center font-semibold opacity-70"
						>
							and {{ cartStore.getUniqueItems - 1 }} other item<span
								v-show="cartStore.getUniqueItems > 2"
								>s</span
							>
						</p>
					</div>
					<div
						class="bg-black flex flex-col justify-cente p-6 lg:p-0 w-full lg:w-4/5 h-full"
					>
						<p
							class="lg:ml-10 uppercase text-md lg:text-lg opacity-60 tracking-wide"
						>
							Grand Total
						</p>
						<p class="lg:ml-10 font-semibold text-md lg:text-lg">
							$ {{ cartStore.getGrandTotal }}
						</p>
					</div>
				</div>
				<buttonSolid
					to="/"
					@click="handleClose()"
					color="light"
					content="back to home"
					class="font-bold mt-6 self-center"
				/>
			</div>
		</div>
	</Transition>
</template>
