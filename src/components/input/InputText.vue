<script setup>

const props = defineProps({

    placeholder: {
        type: String,
        default: " "
    },
    disabled: {
        type: Boolean,
        default: false
    },
    invalid: {
        type: Boolean,
        default: false
    },
    id: String,
    required: false
});

</script>
<template>

    <input :id="id" type="text" :placeholder="placeholder" class="e-input-text"
        :class="[{ 'e-input-text-disabeld': disabled, 'invalid-input': invalid }]" :disabled="disabled"
        :required="required">

</template>

<style></style>