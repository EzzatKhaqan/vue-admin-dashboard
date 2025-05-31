<script setup>

const props = defineProps({

    placeholder: String,
    disabled: {
        type: Boolean,
        default: false
    },
    invalid: {
        type: Boolean,
        default: false
    },
    id: String
});

</script>
<template>

    <input :id="id" type="text" :placeholder="placeholder" class="e-input-text"
        :class="[{ 'e-input-text-disabeld': disabled, 'invalid-input': invalid }]" :disabled="disabled">

</template>

<style></style>