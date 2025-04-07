import { v4 as uuid } from "uuid";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type HabitProps = {
  id: string;
  name: string;
  startDate: string;
  duration: number;
  notification: string | boolean;
  repeatedTimes: number;
};

interface HabitState {
  habitsList: Array<HabitProps>;
  addHabitAsync: (habit: HabitProps) => Promise<void>;
  deleteHabitAsync: (habitId: string) => Promise<void>;
  editHabitAsync: (
    habitId: string,
    payload: Partial<HabitProps>
  ) => Promise<void>;
}

export const useHabitStore = create<HabitState>()(
  devtools((set) => ({
    habitsList: [
      {
        id: uuid(),
        name: "First habit",
        startDate: "2025-03-29",
        duration: 21,
        notification: "18:00",
        repeatedTimes: 7,
      },
      {
        id: uuid(),
        name: "Second habit",
        startDate: "2025-03-28",
        duration: 21,
        notification: "15:30",
        repeatedTimes: 8,
      },
    ],
    addHabitAsync: async (habit: HabitProps) => {
      await new Promise((res) => setTimeout(res, 2500));
      set((state) => ({ habitsList: [...state.habitsList, habit] }));
    },
    deleteHabitAsync: async (habitId: string) => {
      await new Promise((res) => setTimeout(res, 1000));
      set((state) => ({
        habitsList: state.habitsList.filter((item) => item.id !== habitId),
      }));
    },
    editHabitAsync: async (habitId: string, payload: Partial<HabitProps>) => {
        await new Promise((res)=> setTimeout(res, 1000));
        set((state) => {
        return {
          habitsList: [...state.habitsList].map((hb) => {
            if (hb.id === habitId) {
              return { ...hb, ...payload };
            }
            return hb;
          }),
        };
      });
    },
  }))
);
