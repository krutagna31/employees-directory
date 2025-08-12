import { Table } from '@mantine/core';
import { Employee } from '@/types/types';
import classes from "./EmployeesTable.module.css";

interface EmployeesListProps {
  employees: Employee[];
}

export default function EmployeesList({ employees }: EmployeesListProps) {
  return (
    <Table className={classes.table}>
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
        {employees.map((employee) => (
          <Table.Tr key={employee.id}>
            <Table.Td>{employee.id}</Table.Td>
            <Table.Td>{employee.name}</Table.Td>
            <Table.Td>{employee.department}</Table.Td>
            <Table.Td>{employee.email}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
