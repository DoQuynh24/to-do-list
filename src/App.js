import { useState } from 'react';
import styled from 'styled-components';
import Filter from './components/Filter'; 
import List from './components/List';    
const AppContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false, selected: false }]); 
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleSelect = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, selected: !todo.selected } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const deleteSelected = () => {
    setTodos(todos.filter((todo) => !todo.selected));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'Completed') return todo.completed;
    if (filter === 'Active') return !todo.completed;
    return true;
  });

  return (
    <AppContainer>
      <Title>To Do List</Title>
      <Filter currentFilter={filter} setFilter={setFilter} />  
      <List
        todos={filteredTodos}
        addTodo={addTodo}
        toggleCompleted={toggleCompleted}
        toggleSelect={toggleSelect}
        deleteSelected={deleteSelected}
        editTodo={editTodo}
      />
    </AppContainer>
  );
}

export default App;