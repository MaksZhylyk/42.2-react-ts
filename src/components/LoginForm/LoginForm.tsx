import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormTitle, LoginFormWrapper, InputsContainer } from "./style";
import { LoginFormValue, LOGIN_FORM_NAMES } from "./types";

function LoginForm() {
  //
  const schema = Yup.object().shape({
    [LOGIN_FORM_NAMES.EMAIL]: Yup.string()
      .required("Field email is required")
      .email("Field has type email")
      .test(
        "Check value lenght",
        "Max 25 symbols",
        (value) => value.length <= 25
      ),
    [LOGIN_FORM_NAMES.PASSWORD]: Yup.number()
      .required("Field password is required")
      .typeError("Password must be number")
      .test(
        "Check password value lenght",
        "Min 10 symbols",
        (value) => String(value).length >= 10
      )
      .test(
        "Check max password lenght",
        "Max 20 symbols",
        (value) => String(value).length <= 20
      ),
    //test max min
    // .max(150, "Max 10")
    // .min(18, "Min 18"),
  });

  //создание формы
  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_NAMES.EMAIL]: "",
      [LOGIN_FORM_NAMES.PASSWORD]: "",
    } as LoginFormValue,
    validationSchema: schema,
    validateOnChange: false,
    validateOnMount: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik);

  return (
    <LoginFormWrapper onSubmit={formik.handleSubmit}>
      <LoginFormTitle>Login form</LoginFormTitle>
      <InputsContainer>
        <Input
          name={LOGIN_FORM_NAMES.EMAIL}
          id="user_email"
          //type="email"
          placeholder="Enter your email"
          label="Email"
          value={formik.values[LOGIN_FORM_NAMES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.EMAIL]}
        />
        <Input
          name={LOGIN_FORM_NAMES.PASSWORD}
          id="user_password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values[LOGIN_FORM_NAMES.PASSWORD]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.PASSWORD]}
        />
      </InputsContainer>
      <Button name="Login" type="submit" onClick={() => {}} />
    </LoginFormWrapper>
  );
}

export default LoginForm;
