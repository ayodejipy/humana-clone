<template>
	<div class="w-full flex sm:pt-10 sm:pb-60">
		<div class="flex-shrink-0 w-64">
			<p class="text-xl font-light text-gray-800">Lagos, Nigeria</p>
			<p class="text-xl font-light text-gray-800">
				Local Time: <span class="uppercase">{{ time }}</span>
			</p>
			
		</div>
		<div class="flex-shrink-0 w-[17rem] ml-[9.5rem]">
			<p class="text-xl font-light text-gray-800">{{ day }}</p>
			<p class="text-xl font-light text-gray-800">
				{{ monthYear }}
			</p>
		</div>
		<div class="sm:flex-[0_0_51%] sm:max-w-[51%]">
			<h2 class="sm:text-5xl tracking-normal leading-6 font-light break-words">
				We design disruptive brands for organizations that aspire to have a positive social and environmental impact.
			</h2>
		</div>
	</div>
</template>

<script lang="ts" setup>
const { $dayjs } = useNuxtApp();
const time = ref<string>($dayjs().format('HH:mmA'))
const day = ref<string>($dayjs().format('dddd'))
const monthYear = ref<string>($dayjs().format('MMMM D, YYYY'))

</script>