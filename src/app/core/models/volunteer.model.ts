export interface VolunteerModel {
    id: number;
    name: string;
    stand: string;
    timeSlots: string[];
    groupe: string;
    image?: string;
    explanation: string;
  }