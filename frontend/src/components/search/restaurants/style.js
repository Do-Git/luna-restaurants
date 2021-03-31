import styled from "styled-components";

export const SearchBar = styled.div`
  width: 97%;
  height: 60px;
  background: white;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

export const SearchField = styled.input`
  border: none;
  width: 100%;
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  margin-left: 25px;
  margin-top: 10px;
  outline: none;
  color: #d8d8d8;
`;

export const SearchSelector = styled.select`
  height: 100%;
  width: 25%;
  border: none;
  border-left: 1px solid #d8d8d8;
  padding: 0 20px;
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;

  /* margin-left: 45px; */
  color: #d8d8d8;
  outline: none;
`;

export const TabSelector = styled.ul`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 640px;
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const TabSelectorItem = styled.li`
  list-style: none;
  height: 100%;
  margin-bottom: -2px;
  border-bottom: 2px solid;
  border-bottom-color: ${(props) => (props.isActive ? "#E47D31" : "#d8d8d8")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #4c4c4c;
  font-weight: bold;

  :hover {
    border-bottom-color: #e47d31;
  }
`;
export const PageContainer = styled.div`
  padding-top: 70px;
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  background-color: #f8f8f8;
`;

export const PageContent = styled.div`
  min-height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;
