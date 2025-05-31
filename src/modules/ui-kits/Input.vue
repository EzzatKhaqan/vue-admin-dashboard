<script setup>
import { InputText, IconFeild, InputIcon, FloatLabel } from "../../components/index";
</script>
<template>

    <div class="flex flex-col md:flex-row gap-5">
        <div class="md:w-1/2">
            <div class="card flex flex-col gap-5">
                <div class="text-xl">Default</div>
                <div class="flex gap-5">
                    <InputText placeholder="Default" class="w-full" />
                    <InputText placeholder="Disabled" :disabled="true" class="w-full" />
                    <InputText placeholder="Invalid" :invalid="true" class="w-full" />
                </div>
            </div>
            <div class="card flex flex-col  gap-5">
                <div class="text-xl">Icon</div>
                <div class="flex flex-col gap-5">
                    <IconFeild>
                        <InputIcon icon="pi pi-user"></InputIcon>
                        <InputText placeholder="User" class="w-full"></InputText>
                    </IconFeild>
                    <IconFeild>
                        <InputIcon icon="pi pi-building"></InputIcon>
                        <InputText placeholder="City" class="w-full"></InputText>
                    </IconFeild>
                    <IconFeild>
                        <InputIcon icon="pi pi-home"></InputIcon>
                        <InputText placeholder="Apartment" class="w-full"></InputText>
                    </IconFeild>
                    <IconFeild>
                        <InputText placeholder="Search" class="w-full"></InputText>
                        <InputIcon icon="pi pi-search"></InputIcon>
                    </IconFeild>
                </div>
            </div>
            <div class="card flex flex-col gap-5">
                <div class="text-xl">Float Label</div>
                <div class="flex flex-col gap-5">
                    <FloatLabel>
                        <label for="username">Username</label>
                        <InputText id="username" class="w-full"></InputText>
                    </FloatLabel>
                </div>
            </div>
        </div>
        <div class="md:w-1/2">
            <div class="card"></div>
            <div class="card"></div>
        </div>
    </div>

</template>

<style></style>