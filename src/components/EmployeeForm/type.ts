export interface EmployeeFormValue {
  user_firstName: string;
  user_lastName: string;
  user_age: string;
  user_position: string;
}

export enum EMPLOYEE_FORM_NAMES {
  FIRST_NAME = "user_firstName",
  LAST_NAME = "user_lastName",
  AGE = "user_age",
  POSITION = "user_position",
}
