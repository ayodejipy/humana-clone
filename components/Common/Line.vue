<template>
    <div
        ref="lineElement"
        class="h-px w-full mb-6 md:mb-10 bg-gray-200 transform scale-x-0 origin-left"
    ></div>
</template>

<script lang="ts" setup>
const lineElement = ref<HTMLDivElement | null>(null)
const { AnimateLine } = useGsap()

onMounted(() => AnimateLine(lineElement.value))
</script>
