<script setup>
import TimetableDataTable from '../components/TimetableDataTable.vue';
import TimetableData from "../components/TimetableData.vue";
import { ref } from 'vue';
import Toolbar from "../../../components/Toolbar.vue";
const data = ref(
    [

        {
            group_id: 1,
            department_id: 1,
            semester_id: 1,
            department: { name: "AAA", faculty: { name: "BBB" } },
            semester: { semester_number: 1, semester_name: "CCC" },
            timetableEntries: [
                {
                    weekday: "sat",
                    slots: [
                        { slot: 1, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                        { slot: 2, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                        { slot: 3, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                        { slot: 4, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                        { slot: 5, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                        { slot: 6, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                    ],
                },
                {
                    weekday: "sun",
                    slots: [
                        { slot: 1, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                        { slot: 2, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                        { slot: 4, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                        { slot: 6, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                    ],
                },
                {
                    weekday: "wed",
                    slots: [
                        { slot: 1, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                        { slot: 2, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                        { slot: 3, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                        { slot: 4, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                    ],
                }
            ]
        },
    ]
);

const handleClick = (weekday, data, slot) => {
    if (Object.keys(data).length) {

    } else {

    }
}

</script>
<template>
    <TimetableDataTable :data="data">
        <template #header>
            <Toolbar>
                <template #start>
                    header
                </template>
            </Toolbar>
        </template>
        <template #body="{ day }">
            <TimetableData v-for="(slot, slotIndex) in day.slots" :key="slotIndex" :data="slot.data"
                @click="handleClick(day.weekday, slot.data, slotIndex + 1)" />
        </template>
    </TimetableDataTable>
</template>
