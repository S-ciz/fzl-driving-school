
export type Role = "ADMIN" | "STUDENT"
export type Status = "PENDING" | "COMPLETED" | "CANCELLED"; 
export type Booking = {
  id: number;
  student: User;
  studentId: number;
  date: Date;
  durationHrs: number;
  status: Status;
  createdAt: Date;
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
  bookings: Booking[];
  createdAt?: Date;
};
