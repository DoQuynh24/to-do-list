import { useState } from "react";
import styled from "styled-components";
import Item from "./Item";

const Input = styled.input`
  padding: 10px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddButton = styled.button`
  padding: 8px 12px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const DeleteAllButton = styled.button`
  padding: 8px 12px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
  gap: 10px;
`;

function List({ todos, addTodo, toggleCompleted, toggleSelect, editTodo, deleteSelected }) {
  const [input, setInput] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  const hasSelected = todos.some((todo) => todo.selected);

  return (
    <div>
      <Form onSubmit={handleSave}>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <AddButton type="submit">ADD</AddButton>
        {hasSelected && (
        <DeleteAllButton onClick={deleteSelected}>DELETE </DeleteAllButton>
      )}
      </Form>
      {todos.map((todo) => (
        <Item
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          toggleSelect={toggleSelect}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default List;