import { useState } from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Text = styled.span`
  color: black;
  flex: 1;  
  padding: 0 5px 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const EditInput = styled.input`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const SaveButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #218838;
  }
`;

const CancelButton = styled.button`
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
`;

const MarkButton = styled.button`
  background-color: ${(props) => (props.completed ? '#fd7e14' : '#28a745')}; 
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    background-color: ${(props) => (props.completed ? '#e06c12' : '#218838')}; 
  }
`;

function Item({ todo, toggleCompleted, toggleSelect, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <ItemContainer>
      <Checkbox
        type="checkbox"
        checked={todo.selected}
        onChange={() => toggleSelect(todo.id)}
      />
      {isEditing ? (
        <>
          <EditInput
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
          <SaveButton onClick={handleSave}>Save</SaveButton>
          <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        </>
      ) : (
        <>
          <Text completed={todo.completed} onClick={handleEdit}>
            {todo.text}
          </Text>
          <MarkButton completed={todo.completed} onClick={() => toggleCompleted(todo.id)}>
            {todo.completed ? 'Undo' : 'Mark done'}
          </MarkButton>
        </>
      )}
    </ItemContainer>
  );
}

export default Item;