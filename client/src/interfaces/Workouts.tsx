export interface workoutInterface {
    id: number;
    name: string;
    repSets: string; 
    equipment?: Equipment | null;
};

export type Equipment = {
    id: number;
    equipment: string | null;
    exercise_id: number | null;
};

export type Exercise = {
    id: number;
    muscleGroup: string;
    name: string;
    repSets: string;
    equipment?: Equipment | null;
};
// optionally chained for Exercise