import { useState } from 'react';
import { Button } from '@mantine/core';

export default function BuggyComponent() {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error('Error');
  }

  return <Button onClick={() => setError(true)}>Click Me</Button>;
}
