<script setup>
import { reactive } from "vue";
import { AppButton } from "../../components/index"

const loading = reactive({
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
    btn5: false,
    btn6: false,
    btn7: false,
    btn8: false,
    btn9: false,
    btn10: false,
    btn11: false,
    btn12: false,
});

const handleLoading = (btn) => {
    loading[btn] = true;
    setTimeout(() => {
        loading[btn] = false;
    }, 2000);
};

</script>
<template>

    <div class="flex flex-col md:flex-row gap-5">
        <div class="md:w-1/2">
            <div class="card flex flex-col gap-5">
                <h1>Default</h1>
                <div class="flex flex-wrap gap-2">
                    <app-button label="Button" />
                    <app-button label="Button" :disabled="true" />
                </div>
            </div>
            <div class="card flex flex-col gap-5">
                <h1>Types</h1>
                <div class="flex flex-wrap gap-2">
                    <app-button label="Primary" type="primary" />
                    <app-button label="Secondary" type="secondary" />
                    <app-button label="Warn" type="warn" />
                    <app-button label="Success" type="success" />
                    <app-button label="Help" type="help" />
                    <app-button label="Info" type="info" />
                    <app-button label="Danger" type="danger" />
                    <app-button label="Contrast" type="contrast" />
                    <app-button label="Primary" type="primary" :disabled="true" />
                    <app-button label="Secondary" type="secondary" :disabled="true" />
                    <app-button label="Warn" type="warn" :disabled="true" />
                    <app-button label="Success" type="success" :disabled="true" />
                    <app-button label="Help" type="help" :disabled="true" />
                    <app-button label="Info" type="info" :disabled="true" />
                    <app-button label="Danger" type="danger" :disabled="true" />
                    <app-button label="Contrast" type="contrast" :disabled="true" />
                </div>
            </div>
            <div class="card flex flex-col gap-5 ">
                <h1>Icon</h1>
                <div class="flex flex-wrap gap-2">
                    <app-button type="primary" icon="pi pi-check" :outlined="true" :rounded="true" />
                    <app-button type="secondary" icon="pi pi-bookmark" :outlined="true" :rounded="true" />
                    <app-button type="warn" :outlined="true" icon="pi pi-search" :rounded="true" />
                    <app-button type="success" :outlined="true" icon="pi pi-user" :rounded="true" />
                    <app-button type="help" :outlined="true" icon="pi pi-heart" :rounded="true" />
                    <app-button type="info" :outlined="true" icon="pi pi-bell" :rounded="true" />
                    <app-button type="danger" :outlined="true" icon="pi pi-times" :rounded="true" />
                    <app-button type="primary" icon="pi pi-check" :rounded="true" />
                    <app-button type="secondary" icon="pi pi-bookmark" :rounded="true" />
                    <app-button type="warn" icon="pi pi-search" :rounded="true" />
                    <app-button type="success" icon="pi pi-user" :rounded="true" />
                    <app-button type="help" icon="pi pi-heart" :rounded="true" />
                    <app-button type="info" icon="pi pi-bell" :rounded="true" />
                    <app-button type="danger" icon="pi pi-times" :rounded="true" />
                </div>
            </div>
            <div class="card flex flex-col gap-5 ">
                <h1>Loading</h1>
                <div class="flex flex-wrap gap-2">
                    <app-button label="Primary" type="primary" :loading="loading.btn1" @click="handleLoading('btn1')" />
                    <app-button label="Secondary" type="secondary" icon="pi pi-circle" :loading="loading.btn2"
                        @click="handleLoading('btn2')" />
                    <app-button label="Warn" type="warn" icon="pi pi-search" direction="rtl" :loading="loading.btn3"
                        @click="handleLoading('btn3')" />
                    <app-button type="success" icon="pi pi-search" :loading="loading.btn4"
                        @click="handleLoading('btn4')" />
                    <app-button label="Search" type="help" icon="pi pi-search" :loading="loading.btn5"
                        @click="handleLoading('btn5')" />
                    <app-button label="Delete" type="danger" icon="pi pi-bookmark" :loading="loading.btn6"
                        @click="handleLoading('btn6')" />
                    <app-button type="primary" icon="pi pi-check" :outlined="true" :rounded="true"
                        :loading="loading.btn7" @click="handleLoading('btn7')" />
                    <app-button type="secondary" icon="pi pi-bookmark" :outlined="true" :rounded="true"
                        :loading="loading.btn8" @click="handleLoading('btn8')" />
                    <app-button type="warn" :outlined="true" icon="pi pi-search" :rounded="true" :loading="loading.btn9"
                        @click="handleLoading('btn9')" />
                    <app-button type="success" :outlined="true" icon="pi pi-user" :rounded="true"
                        :loading="loading.btn10" @click="handleLoading('btn10')" />
                    <app-button type="help" :outlined="true" icon="pi pi-heart" :rounded="true" :loading="loading.btn11"
                        @click="handleLoading('btn11')" />
                    <app-button type="danger" :outlined="true" icon="pi pi-times" :rounded="true"
                        :loading="loading.btn12" @click="handleLoading('btn12')" />
                </div>
            </div>
        </div>
        <div class="md:w-1/2">
            <div class="card flex flex-col gap-5">
                <h1>Outlined</h1>
                <div class="flex flex-wrap gap-2">
                    <app-button label="Primary" type="primary" :outlined="true" />
                    <app-button label="Secondary" type="secondary" :outlined="true" />
                    <app-button label="Warn" type="warn" :outlined="true" />
                    <app-button label="Success" type="success" :outlined="true" />
                    <app-button label="Help" type="help" :outlined="true" />
                    <app-button label="Info" type="info" :outlined="true" />
                    <app-button label="Danger" type="danger" :outlined="true" />
                    <app-button label="Contrast" type="contrast" :outlined="true" />
                    <app-button label="Primary" type="primary" :outlined="true" :disabled="true" />
                    <app-button label="Secondary" type="secondary" :outlined="true" :disabled="true" />
                    <app-button label="Warn" type="warn" :outlined="true" :disabled="true" />
                    <app-button label="Success" type="success" :outlined="true" :disabled="true" />
                    <app-button label="Help" type="help" :outlined="true" :disabled="true" />
                    <app-button label="Info" type="info" :outlined="true" :disabled="true" />
                    <app-button label="Danger" type="danger" :outlined="true" :disabled="true" />
                    <app-button label="Contrast" type="contrast" :outlined="true" :disabled="true" />
                </div>
            </div>
            <div class="card flex flex-col gap-5">
                <h1>Rounded</h1>
                <div class="flex flex-wrap gap-2">
                    <app-button label="Primary" type="primary" :rounded="true" />
                    <app-button label="Secondary" type="secondary" :rounded="true" />
                    <app-button label="Warn" type="warn" :rounded="true" />
                    <app-button label="Success" type="success" :rounded="true" />
                    <app-button label="Help" type="help" :rounded="true" />
                    <app-button label="Info" type="info" :rounded="true" />
                    <app-button label="Danger" type="danger" :rounded="true" />
                    <app-button label="Contrast" type="contrast" :rounded="true" />
                    <app-button label="Primary" type="primary" :rounded="true" :disabled="true" />
                    <app-button label="Secondary" type="secondary" :rounded="true" :disabled="true" />
                    <app-button label="Warn" type="warn" :rounded="true" :disabled="true" />
                    <app-button label="Success" type="success" :rounded="true" :disabled="true" />
                    <app-button label="Help" type="help" :rounded="true" :disabled="true" />
                    <app-button label="Info" type="info" :rounded="true" :disabled="true" />
                    <app-button label="Danger" type="danger" :rounded="true" :disabled="true" />
                    <app-button label="Contrast" type="contrast" :rounded="true" :disabled="true" />
                </div>
            </div>
            <div class="card flex flex-col gap-5 ">
                <h1>Link Button</h1>
                <div class="flex flex-wrap gap-2">
                    <app-button label="Link" role="link" to="/timetable" type="primary" :outlined="true" />
                </div>
            </div>
        </div>
    </div>

</template>
