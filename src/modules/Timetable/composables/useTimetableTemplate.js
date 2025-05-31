import { ref } from "vue";

const weekdays = ["sat", "sun", "mon", "tue", "wed", "thu"];
const timetable_slots = [
  { slot: 1, start_time: "08:00", end_time: "08:50" },
  { slot: 2, start_time: "08:55", end_time: "09:45" },
  { slot: 3, start_time: "09:50", end_time: "10:40" },
  { slot: 4, start_time: "10:45", end_time: "11:35" },
  { slot: 5, start_time: "11:40", end_time: "12:30" },
  { slot: 6, start_time: "12:35", end_time: "01:25" },
];

export const useTimetableTemplate = (apiData = [[]]) => {
  const timetables = ref([]);

  const timetableTemplate = () => {
    const safeData = apiData.length === 0 ? [[]] : apiData;
    for (let i = 0; i < safeData.length; i++) {
      const timetable = [];

      let meta = {
        department: apiData[i]?.["department"],
        semester: apiData[i]?.["semester"],
      };

      for (let weekday of weekdays) {
        const dayData = safeData[i]["timetableEntries"]?.find(
          (d) => d.weekday === weekday
        );

        const slots = [];
        for (let s = 1; s <= timetable_slots.length; s++) {
          const filledSlot = dayData?.slots?.find((slot) => slot.slot === s);
          slots.push(filledSlot ?? { slot: s, data: {} });
        }

        timetable.push({
          weekday,
          slots,
          is_empty: apiData.length !== 0,
        });
      }
      timetables.value.push({
        timetable: timetable,
        meta: meta,
        slots: timetable_slots,
      });
    }
  };

  timetableTemplate();

  return {
    timetables,
  };
};
