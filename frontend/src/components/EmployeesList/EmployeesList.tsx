import { useState } from 'react';
import { Container, Flex, Pagination, Table } from '@mantine/core';
import { Employee } from '@/types/types';

interface EmployeesListProps {
  employees: Employee[][];
}

export default function EmployeesList({ employees }: EmployeesListProps) {
  const [page, setPage] = useState(1);

  return (
    <Container>
      <Table>
        <Table.Caption>List of Employees</Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Id</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Department</Table.Th>
            <Table.Th>Email</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {employees[page - 1].map((employee) => (
            <Table.Tr key={employee.id}>
              <Table.Td>{employee.id}</Table.Td>
              <Table.Td>{employee.name}</Table.Td>
              <Table.Td>{employee.department}</Table.Td>
              <Table.Td>{employee.email}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <Flex justify="center">
        <Pagination total={employees.length} value={page} onChange={setPage} />
      </Flex>
    </Container>
  );
}
