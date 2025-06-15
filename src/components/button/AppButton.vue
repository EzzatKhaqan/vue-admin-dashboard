<script setup>
import { computed } from "vue";

const props = defineProps({
    label: String,
    type: {
        type: String,
        default: "primary"
    },
    disabled: Boolean,
    rounded: Boolean,
    outlined: Boolean,
    direction: String,
    loading: Boolean,
    icon: String,
    role: {
        type: String,
        default: "button"
    },
    to: String
});
const isLink = props.role.toLowerCase() == 'link';
</script>

<template>
    <router-link v-if="isLink" :to="props.to">
        <button class="e-button" :type="props.role"
            :class="[type, { 'disabled': props.disabled || loading, 'outlined': outlined, 'rounded': rounded, 'e-button-icon-only': !label }, 'e-button-link']">
            <div :dir="props.direction">
                <span class="e-app-button-text" v-if="label">{{ props.label }}</span>
                <i v-if="loading" class="pi pi-spin pi-spinner"></i>
                <i v-else-if='icon' :class="[props.icon, 'e-app-button-icon']"></i>
            </div>
        </button>
    </router-link>
    <button v-else class="e-button" :type="props.role"
        :class="[type, { 'disabled': props.disabled || loading, 'outlined': outlined, 'rounded': rounded, 'e-button-icon-only': !label }]">
        <div :dir="props.direction">
            <span class="e-app-button-text" v-if="label">{{ props.label }}</span>
            <i v-if="loading" class="pi pi-spin pi-spinner"></i>
            <i v-else-if='icon' :class="[props.icon, 'e-app-button-icon']"></i>
        </div>
    </button>
</template>
