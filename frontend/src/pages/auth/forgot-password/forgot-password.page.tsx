import Button from "components/common/button/button";
import { InputField } from "components/common/input/input-field";
import { Typography } from "components/common/typography/typography";
import { AuthLayout } from "components/layouts/auth-layout/auth-layout";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { UserActionCreator } from "store/slices";
import InfoAlert from "components/common/alerts/Alert.info";

const ForgotPassword: React.FC = () => {
  const dispatch = useDispatch();
  const message = useSelector<any>(store => store.users.message) as string;
  const [infoPopup, setInfoPopup] = useState('');
  useEffect(() => {
    setInfoPopup(message);
  }, [message])
  return (
    <AuthLayout>
      <div className=" align-middle">
        <Typography type="h2" className=" mt-20 ">
          Forgot password
        </Typography>
        <Typography type="body" className="mt-4 text-green-pressed">
          We will send you the link to your email address to reset your password
        </Typography>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
          })}
          onSubmit={(values) => {
            const {email} = values;
            dispatch({type: UserActionCreator.asyncForgotPasswordSaga().type, email})
          }}
        >
          <Form>
            <InputField
              name="email"
              placeholder="Email address"
              className="w-102.5 mt-6"
              type="email"
            />
            {
              message 
                  ? <InfoAlert 
                      title="Success!"
                      message={infoPopup}
                  />  
                  : null
            }
            <div className="w-102.5 flex mt-10">
              <Button
                nameBtn="primary"
                className="w-screen h-12 box-border mr-0 "
                type="submit"
              >
                Send the link
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
