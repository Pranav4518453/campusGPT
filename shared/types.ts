export type UserRole = "student" | "faculty" | "admin";

export interface User {
  _id?: string;
  name: string;
  email: string;
  role: UserRole;
  interests?: string[];
  timetable?: any;
  assignments?: Assignment[];
}

export interface Assignment {
  title: string;
  dueDate: string;
  completed: boolean;
}

export interface Announcement {
  title: string;
  body: string;
  postedBy: string;
  date: string;
}

export interface LostFoundItem {
  image: string;
  description: string;
  location: string;
  tags?: string[];
  postedBy: string;
  date: string;
}