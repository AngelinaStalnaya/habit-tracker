import {create} from 'zustand';

type HabitProps = {
    name: string,
    startDate: string,
    duration: number,
    notification: string | boolean,
    repeatedTimes: number,
}

interface HabitState {
    habitsList: Array<HabitProps>,
    addHabitAsync: (habit: HabitProps) => Promise<void>,
}

export const useHabitStore = create<HabitState>((set) => ({
    habitsList: [{
        name: 'First habit',
        startDate: '2025-03-29',
        duration: 21,
        notification: '18:00',
        repeatedTimes: 7,
    }, {
        name: 'Second habit',
        startDate: '2025-03-28',
        duration: 21,
        notification: '15:30',
        repeatedTimes: 8,
    },
],
    addHabitAsync: async (habit: HabitProps) => {
        await new Promise((res) => setTimeout(res, 1000));
        set((state) => ({habitsList: [...state.habitsList, habit]}));
    },
}))