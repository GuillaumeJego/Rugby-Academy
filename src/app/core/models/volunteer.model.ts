export interface VolunteerModel {
  id: number;
  name: string;
  lastName: string;
  stand: string;
  timeSlots: string[];
  groupe: string;
  explanation: string;
  phoneNumber?: string;
}