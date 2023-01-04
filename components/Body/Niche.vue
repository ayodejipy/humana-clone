<template>
	<div class="w-full flex sm:pb-60">
		<div class="flex-shrink-0 w-full sm:w-[34rem]">
			<p class="text-lg font-light text-gray-800 cursor-text">Working worlwide for</p>
		</div>
		<div class="flex-1">
			<div class="grid grid-cols-4 gap-y-3 sm:gap-y-6">
				<p v-for="niche in niches" :key="niche" class="text-lg font-light text-gray-800">{{ niche }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const niches = ref<string[]>([
	'Arts & Culture', 'Civic & Public', 'Design & Architecture', 'Fashion & Beauty', 'Industrial & Agriculture', 'Non Profit', 'Professional Services'
])

</script>