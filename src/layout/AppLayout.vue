<script setup>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
import Footer from "./Footer.vue";
import { useLayout } from "./composables/layout";
import { computed } from "vue";
const { layoutState } = useLayout();
const classContainer = computed(() => {
    return {
        'sidebar-expanded': layoutState.isSidebarOpen
    }
});
</script>
<template>

    <div class="wrapper" :class="classContainer">
        <Header />
        <Sidebar />
        <div class="page-wrapper ">
            <router-view />
        </div>
        <Footer />
    </div>

</template>

<style></style>