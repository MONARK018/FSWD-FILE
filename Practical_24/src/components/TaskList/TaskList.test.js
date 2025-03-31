import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';

test('renders a list of tasks', () => {
  const tasks = [
    { id: 1, title: 'Test Task 1' },
    { id: 2, title: 'Test Task 2' },
  ];

  render(<TaskList tasks={tasks} />);

  tasks.forEach(task => {
    expect(screen.getByText(task.title)).toBeInTheDocument();
  });
});

test('displays "No tasks available" if the list is empty', () => {
  render(<TaskList tasks={[]} />);

  expect(screen.getByText(/no tasks available/i)).toBeInTheDocument();
});
