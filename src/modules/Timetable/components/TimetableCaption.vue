<script setup>
const props = defineProps(
    {
        data: Object,
    }
);
</script>
<template>

    <div class="e-timetable-caption">
        <p>
            {{
                `
            Timetable of ${props.data?.department?.name} Department
            Semester ${props.data?.semester?.semester_number + " " + props.data?.semester?.semester_name}
            `
            }}
        </p>
    </div>

</template>


<style scoped>
.e-timetable-caption {
    width: 100%;
    height: 50px;
    background-color: #ffa500;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 25px;
    border-radius: 5px;
}
</style>