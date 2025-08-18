export interface Employee {
  id: number;
  name: string;
  department: string;
  email: string;
}

export type UsersPerPage = 5 | 10 | 15 | 20;