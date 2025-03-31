import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AddTask from './AddTask';

test('submits the form with valid data', async () => {
  const handleAddTask = jest.fn();
  render(<AddTask onAddTask={handleAddTask} />);

  const input = screen.getByLabelText(/task title/i);
  const button = screen.getByText(/add task/i);

  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);

  await waitFor(() => expect(handleAddTask).toHaveBeenCalledWith('New Task'));
});

test('clears the form after submission', async () => {
  render(<AddTask onAddTask={jest.fn()} />);

  const input = screen.getByLabelText(/task title/i);
  const button = screen.getByText(/add task/i);

  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);

  expect(input.value).toBe('');
});
