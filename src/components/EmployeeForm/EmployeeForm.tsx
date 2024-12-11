import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../Input/Input";
import Button from "../Button/Button";
import { EmployeeFormValue, EMPLOYEE_FORM_NAMES } from "./type";
import {
  EmployeeFormContainer,
  EmployeeFormTitle,
  NameWrapper,
  AgeWrapper,
  PositionWrapper,
  ButtonWrapper,
} from "./styles";

function EmployeeForm() {
  const schema = Yup.object().shape({
    [EMPLOYEE_FORM_NAMES.FIRST_NAME]: Yup.string()
      .required("Field name is required")
      .matches(/^[A-Za-zА]+$/, "Must be chars")
      .test(
        "Check min name value lenght",
        "Min 2 symbols",
        (value) => value.length >= 2
      )
      .test(
        "Check max name value lenght",
        "Max 50 symbols",
        (value) => value.length <= 50
      ),
    [EMPLOYEE_FORM_NAMES.LAST_NAME]: Yup.string()
      .required("Field lastname is required")
      .matches(/^[A-Za-zА]+$/, "Must be chars")
      .test(
        "Check max lastname value lenght",
        "Max 15 symbols",
        (value) => value.length <= 15
      ),
    [EMPLOYEE_FORM_NAMES.AGE]: Yup.number()
      .optional()
      .typeError("Must be number")
      .min(18, "Min age 18")
      .max(80, "Max age 80"),
    [EMPLOYEE_FORM_NAMES.POSITION]: Yup.string()
      .required("Field position is required")
      .matches(/^[A-Za-zА]+$/, "Must be chars")
      .test(
        "Check max position value lenght",
        "Max 30 symbols",
        (value) => value.length <= 30
      ),
  });

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_NAMES.FIRST_NAME]: "",
      [EMPLOYEE_FORM_NAMES.LAST_NAME]: "",
      [EMPLOYEE_FORM_NAMES.AGE]: "",
      [EMPLOYEE_FORM_NAMES.POSITION]: "",
    } as EmployeeFormValue,
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const onSubmit = () => {
    console.log(formik);
  };

  return (
    <EmployeeFormContainer onSubmit={formik.handleChange}>
      <EmployeeFormTitle>Employee Form</EmployeeFormTitle>
      <NameWrapper>
        <Input
          name={EMPLOYEE_FORM_NAMES.FIRST_NAME}
          id="user_firstname"
          placeholder="Enter your name"
          label="First Name"
          value={formik.values[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.LAST_NAME}
          id="user_firstname"
          placeholder="Enter your lastname"
          label="Last Name"
          value={formik.values[EMPLOYEE_FORM_NAMES.LAST_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.LAST_NAME]}
        />
      </NameWrapper>
      <AgeWrapper>
        <Input
          name={EMPLOYEE_FORM_NAMES.AGE}
          id="user_age"
          placeholder="Enter your age"
          label="Age"
          value={formik.values[EMPLOYEE_FORM_NAMES.AGE]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.AGE]}
        />
      </AgeWrapper>
      <PositionWrapper>
        <Input
          name={EMPLOYEE_FORM_NAMES.POSITION}
          id="user_position"
          placeholder="Enter your position"
          label="Position"
          value={formik.values[EMPLOYEE_FORM_NAMES.POSITION]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.POSITION]}
        />
      </PositionWrapper>
      <ButtonWrapper>
        <Button name="Create" type="submit" onClick={onSubmit} />
      </ButtonWrapper>
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
