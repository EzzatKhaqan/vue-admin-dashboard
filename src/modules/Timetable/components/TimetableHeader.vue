<script setup>
const props = defineProps({
    slots: Array
});
</script>
<template>

    <th></th>
    <td v-for="slot in props.slots" :key="slot.slot">
        <div>{{ slot.slot }}</div>
        <div class="e-time">{{ slot.start_time + " - " + slot.end_time }}</div>
    </td>
</template>

<style>
.e-timetable-wrapper table tr:first-child th,
.e-timetable-wrapper table tr:first-child td {
    text-align: center;
    height: 30px;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    background-color: white;
}

.e-timetable-wrapper table tr:first-child th {
    min-width: 30px;
}

.e-timetable-wrapper table tr:first-child td {
    min-width: 150px;
    height: 40px;
    padding: 5px;
}

.e-time {
    margin-top: 10px;
    font-size: 8px;
}
</style>