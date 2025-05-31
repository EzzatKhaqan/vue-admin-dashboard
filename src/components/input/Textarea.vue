<script setup>
defineProps({
    id: String,
    rows: String,
    cols: String,
    placeholder: String
})

</script>
<template>
    <textarea :placeholder="placeholder" :id="id" class="e-textarea" style="overflow: hidden;" :rows="rows"
        :cols="cols"></textarea>


</template>



<style></style>