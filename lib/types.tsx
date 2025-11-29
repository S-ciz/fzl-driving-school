
export type Role = "ADMIN" | "STUDENT"
export type Status = "PENDING" | "COMPLETED" | "CANCELLED"; 

export type Booking = {
  id: string;
  studentId: string,
  date: string;
  durationHrs: number;
  status: string;
  createdAt: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  createdAt?: string;
};
