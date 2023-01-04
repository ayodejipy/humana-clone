<template>
    <div class="w-full flex flex-row overflow-x-hidden sm:pb-60">
            <div v-for="niche in niches" :key="niche" class="text-lg font-light text-gray-800">{{ niche }}</div>
    </div>
</template>

<script lang="ts" setup>
const niches = ref<string[]>(["Arts & Culture", "Civic & Public", "Design & Architecture", "Fashion & Beauty", "Industrial & Agriculture", "Design & Architecture", "Fashion & Beauty", "Industrial & Agriculture", "Design & Architecture", "Fashion & Beauty", "Industrial & Agriculture", "Design & Architecture", "Fashion & Beauty", "Industrial & Agriculture", "Non Profit", "Industrial & Agriculture", "Design & Architecture", "Fashion & Beauty", "Industrial & Agriculture", "Design & Architecture", "Fashion & Beauty", "Industrial & Agriculture", "Design & Architecture", "Fashion & Beauty", "Industrial & Agriculture", "Industrial & Agriculture", "Design & Architecture", "Fashion & Beauty", "Industrial & Agriculture", "Design & Architecture", "Fashion & Beauty", "Industrial & Agriculture", "Design & Architecture", "Fashion & Beauty", "Industrial & Agriculture", "Professional Services"]);
</script>
