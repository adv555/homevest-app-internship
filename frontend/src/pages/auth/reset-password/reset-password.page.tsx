import Button from "components/common/button/button";
import { Typography } from "components/common/typography/typography";
import { AuthLayout } from "components/layouts/auth-layout/auth-layout";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { PasswordInputField } from "components/common/input/password-input-field";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { UserActionCreator } from "store/slices";
import ErrorAlert from "components/common/alerts/Alert.error";
const resetPasswordSchema = Yup.object({
  password: Yup.string()
    .required("Required")
    .min(8)
    .max(24)
    .matches(
      /^[-a-zA-Z0-9 !"#$%&'()*+,.//:;<=>?@[\\\]^_`{|}~]*$/gm,
      "Password should contain only English letters, digits and special characters"
    )
    .matches(
      /[- !"#$%&'()*+,.//:;<=>?@[\\\]^_`{|}~]+$/gm,
      "Password should contain at least one special character"
    ),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
const ResetPassword: React.FC = () => {
  const params: {id: string} = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const message = useSelector<any>(store => store.users.message) as string;
  const [errorPopup, setErrorPopup] = useState('');
  useEffect(() => {
    setErrorPopup(message);
  }, [message])
  return (
    <AuthLayout>
      <div className=" align-middle">
        <Typography type="h2" className=" mt-20 ">
          Reset password
        </Typography>
        <Typography type="body" className="mt-4 text-green-pressed">
          Please enter your new pasword
        </Typography>
        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          validationSchema={resetPasswordSchema}
          onSubmit={async (values) => {
              const { password } = values;
              dispatch({type: UserActionCreator.asyncResetPasswordSaga().type, code: params.id, password, history});
          }}
        >
          <Form>
            <PasswordInputField
              name="password"
              placeholder="Password"
              className="w-102.5 mt-6"
              type="password"
            />
            <PasswordInputField
              name="confirmPassword"
              placeholder="Confirm password"
              className="w-102.5 mt-6"
              type="password"
            />
            {
              message 
                  ? <ErrorAlert 
                      title="Error!"
                      message={errorPopup}
                  />  
                  : null
            }
            <div className="w-102.5 flex mt-10">
              <Button
                nameBtn="primary"
                className="w-screen h-12 box-border mr-0 "
                type="submit"
              >
                Confirm new password
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
