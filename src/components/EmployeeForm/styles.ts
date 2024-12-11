import styled from "@emotion/styled";

export const EmployeeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  width: 700px;
  border: 2px solid black;
  border-radius: 4px;
  background-color: rgb(169, 236, 245);
  gap: 30px;
`;

export const EmployeeFormTitle = styled.div`
  font-size: 36px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 800;
  margin: 0;
  padding: 0;
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 60px;
`;

export const AgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
`;

export const PositionWrapper = styled.div`
  width: 400px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 270px;
`;
