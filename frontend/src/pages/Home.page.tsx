import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Flex, Pagination, Title } from '@mantine/core';
import EmployeesList from '@/components/EmployeesTable/EmployeesTable';
import { Employee } from '@/types/types';

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
  const [activeIndex, setActiveIndex] = useState(1);

  if (isPending) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    <h2>An error has occured: ${error.message}</h2>;
  }

  if (!data) {
    return <h2>No employees found</h2>;
  }

  const employees = chunk(data, 20);

  return (
    <>
      <Title ta="center" mb="lg">
        Employees Directory
      </Title>
      <EmployeesList employees={employees[activeIndex - 1]} />
      <Flex justify="center">
        <Pagination total={employees.length} value={activeIndex} onChange={setActiveIndex} />
      </Flex>
    </>
  );
}
