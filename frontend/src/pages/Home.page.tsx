import { useQuery } from '@tanstack/react-query';
import { Title } from '@mantine/core';
import EmployeesList from '@/components/EmployeesTable/EmployeesTable';
import { Employee } from '@/types/types';

export function HomePage() {
  const { data, isPending, error } = useQuery<Employee[]>({
    queryKey: ['employees'],
    queryFn: () => fetch('http://localhost:3000/api/employees').then((res) => res.json()),
  });

  if (isPending) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    <h2>An error has occured: ${error.message}</h2>;
  }

  if (!data) {
    return <h2>No employees found</h2>;
  }

  return (
    <>
      <Title ta="center" mb="lg">
        Employees Directory
      </Title>
      <EmployeesList employees={data} />
    </>
  );
}
