import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Flex, Pagination } from '@mantine/core';
import EmployeesList from '@/components/EmployeesList/EmployeesList';
import Header from '@/components/Header/Header';
import { Employee, UsersPerPage } from '@/types/types';

const chunk = <T,>(items: T[], size: number): T[][] => {
  if (items.length === 0) {
    return [];
  }

  const head = items.slice(0, size);
  const tail = items.slice(size);

  return [head, ...chunk(tail, size)];
};

export function HomePage() {
  const { data, isPending, error } = useQuery<Employee[]>({
    queryKey: ['employees'],
    queryFn: () => fetch('http://localhost:3000/api/employees').then((res) => res.json()),
  });
  const [usersPerPage, setUsersPerPage] = useState<UsersPerPage>(10);

  const handleUsersPerPageChange = (nextUsers: UsersPerPage) => {
    setUsersPerPage(nextUsers);
  };

  if (isPending) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    <h2>An error has occured: ${error.message}</h2>;
  }

  if (!data) {
    return <h2>No employees found</h2>;
  }

  // user should have an option to select the items that are displayed on the page

  // dynamically fetch the data from backend.
  const employees = chunk(data, usersPerPage);

  return (
    <>
      <Header usersPerPage={usersPerPage} onUsersPerPageChange={handleUsersPerPageChange} />
      <EmployeesList employees={employees} />
    </>
  );
}
