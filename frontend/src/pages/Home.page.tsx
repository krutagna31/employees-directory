import { useQuery } from '@tanstack/react-query';
import { Table, Title } from '@mantine/core';
import { Employee } from '@/types/types';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  const { data, isPending, error } = useQuery<Employee[]>({
    queryKey: ['employees'],
    queryFn: () => fetch('http://localhost:3000/api/employees').then((res) => res.json()),
  });

  if (isPending) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(`An error has occured: ${error.message}`);
  }

  if (!data) {
    return <h2>No employees found</h2>;
  }

  console.log(data);

  return (
    <>
      <Title ta="center" mb="lg">Employees Directory</Title>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Id</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Department</Table.Th>
            <Table.Th>Email</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((data) => (
            <Table.Tr key={data.id}>
              <Table.Td>{data.id}</Table.Td>
              <Table.Td>{data.name}</Table.Td>
              <Table.Td>{data.department}</Table.Td>
              <Table.Td>{data.email}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
}
