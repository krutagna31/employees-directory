import { useState } from 'react';
import { Container, Flex, Select, Title } from '@mantine/core';
import { UsersPerPage } from '@/types/types';

interface HeaderProps {
  usersPerPage: number;
  onUsersPerPageChange: (nextUsers: UsersPerPage) => void;
}

export default function Header({ usersPerPage, onUsersPerPageChange }: HeaderProps) {
  return (
    <header>
      <Container py="sm" size="lg">
        <Flex justify="space-between" align="center">
          <Title order={1} size="h2">
            Employee Directory
          </Title>
          <Select
            aria-label="Number of users"
            onChange={(value) => {
              onUsersPerPageChange(Number(value) as UsersPerPage);
            }}
            placeholder="Select number of users"
            data={['5', '10', '15', '20']}
            value={String(usersPerPage)}
          />
        </Flex>
      </Container>
    </header>
  );
}
