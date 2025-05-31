<script setup>
import TimetableCaption from './TimetableCaption.vue';
import TimetableHeader from './TimetableHeader.vue';
import { useTimetableTemplate } from "../composables/useTimetableTemplate";

const props = defineProps({
    data: Object,
    weekday: Array
});
const { timetables } = useTimetableTemplate(props.data);

</script>

<template>
    <div class="e-timetable-wrapper" v-for="(timetable, tIndex) in timetables" :key="tIndex">
        <slot name="header" :data="timetable.meta" />

        <TimetableCaption :data="timetable.meta" />
        <div class="e-timetable-datatable">
            <table>
                <tbody>
                    <tr>
                        <TimetableHeader :slots="timetable.slots" />
                    </tr>
                    <tr v-for="(day, dayIndex) in timetable.timetable" :key="dayIndex">
                        <th>{{ day.weekday }}</th>
                        <!-- TableData -->
                        <slot name="body" :day="day" v-if="day.is_empty" />
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>
.e-timetable-wrapper {
    padding: 35px;
    background: var(--e-white);
    border-radius: 5px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.e-timetable-wrapper .timetable_header {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid var(--e-border-color);
    display: flex;
    justify-content: space-between;
}



.e-timetable-datatable {
    width: 100%;
    height: 100%;
    overflow: auto;
}

.e-timetable-wrapper table {
    border-collapse: collapse;
}

.e-timetable-wrapper table tr:first-child {
    border: 1px solid black;
}

.e-timetable-wrapper table tr th {
    min-width: 30px;
    height: 100px;
    padding: 5px;
    border: 2px solid #e2e8f0;
    font-size: 14px;
    font-weight: 300;
}

.e-timetable-wrapper table tr td {
    width: 150px;
    height: 100px;
    background-color: #ffff;
}
</style>