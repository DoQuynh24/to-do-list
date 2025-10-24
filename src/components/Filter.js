import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? '#28a745' : '#f1f1f1')};
  color: ${(props) => (props.active ? 'white' : '#333')};
  cursor: pointer;
  &:hover {
      background-color: ${(props) => (props.active ? '#218838' : '#e0e0e0')};
  }
`;

function Filter({currentFilter, setFilter}){
  const filters = ['All', 'Completed', 'Active'];
  return(
    <FilterContainer>
    {filters.map((filter) => (
      <FilterButton
        key={filter}
        active={filter === currentFilter}
        onClick={() => setFilter(filter)}
      >
        {filter}
      </FilterButton>
    ))}
    </FilterContainer>
  );
}
export default Filter;