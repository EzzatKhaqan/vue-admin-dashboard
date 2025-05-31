<script setup>

</script>
<template>
    <div class="toolbar">
        <div class="start">
            <slot name="start" />
        </div>
        <div class="center">
            <slot name="center" />
        </div>
        <div class="end">
            <slot name="end" />
        </div>
    </div>
</template>

<style>
.toolbar {
    width: 100%;
    height: 40px;
    border: 1px solid var(--e-border-color);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
</style>