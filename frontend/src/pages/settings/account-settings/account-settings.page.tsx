import React from "react";
import { useState } from "react";
import Button from "components/common/button/button";
import { InputField } from "components/common/input/input-field";
import { Select } from "components/common/select/select";
import { Formik, Form, FormikHelpers } from "formik";
import { Typography } from "components/common/typography/typography";
import { ReactComponent as ImagesLoad } from "assets/images/images-load.svg";
import { ReactComponent as ProfileIcon } from 'assets/images/profile.svg'
import { ReactComponent as PasswordIcon } from 'assets/images/password.svg'
import { ReactComponent as VectorIcon } from 'assets/images/vector.svg'
import { ReactComponent as DocIcon } from 'assets/images/doc.svg'
import { ReactComponent as DocVectorIcon } from 'assets/images/doc-vector.svg'
import { ReactComponent as CompanyPlaceholderIcon } from 'assets/images/company-logo-placeholder.svg'
import { ReactComponent as CloseIcon } from 'assets/images/close.svg'
import { SideBar } from "components/Navigation/SideBar";
import { Header } from "components/Navigation/Header";
import { AppBar } from "components/Navigation/AppBar";
import { Logo } from "components/Navigation/Logo";
import { AccountSettingsProps } from "./types/account-settings-props.interface";
import { AccountSettingsSchema } from "./account-settings.schema";
import axios from "axios";

async function postDocument({document} : {document : any}) {
  const formData = new FormData();
  formData.append("document", document)

  const result = await axios.post('/companies/files', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  return result.data
}

export const AccountSettingsPage: React.FC = () => {
  const initialValues: AccountSettingsProps = {
    fullName: "fullName",
    email: "email@gmail.com",
    companyName: "companyName",
    companyLogo: "companyLogo",
    officialWebsite: "officialWebsite",
    dateOfEstablishment: "dateOfEstablishment",
    phoneNumber: "phoneNumber",
    city: "city",
    street: "street",
    documents: "documents"
  };

  const [file, setFile] = useState()
  const [documents, setDocuments] = useState<any>([])
  const [active, setActive] = useState(false);

  const submit = async (event: any) => {
    event.preventDefault()
    const result = await postDocument({document: file})
    setDocuments([result.document, ...documents])
    console.log(result);
  }

  const fileSelected = (event: any) => {
    const file = event.target.files[0]
		setFile(file)
	}


  const onClick = () => {
    setActive(true);
  };

  return (
    <>
      <div className="container">
        {active ? (
         <>
            <SideBar />
            <Header position="left-72 justify-start py-8 pl-110px ">
              <AppBar/>
            </Header>
          </>
        ) : (
          <>
            <Header position="left-0 justify-center py-6 px-75px">
              <Logo onClick={onClick} />
              <AppBar />
            </Header>
          </>
        )}
        <div className="flex pt-20 mb-59px px-75px">
          <div className="flex-1 border-r">
            <Typography type="h4" className="pt-14 pb-12">Settings</Typography>
            <div className="flex">
              <ProfileIcon className="mr-5"/>
              <div className="flex-auto border-b mb-8">
                <VectorIcon className="float-right mt-2.5 mr-69px"/>
                <Typography type="h6" className="mb-2 text-green">Account Settings</Typography>
                <Typography type="body-large" className="mb-4 text-green">Company information</Typography>
              </div>
            </div>
            <div className="flex">
              <PasswordIcon className="mr-5"/>
              <div className="flex-auto border-b mb-8">
                <VectorIcon className="float-right mt-2.5 mr-69px"/>
                <Typography type="h6" className="mb-2 text-light-blue">Security</Typography>
                <Typography type="body-large" className="mb-4 text-light-blue">Password, change password</Typography>
              </div>
            </div>
            <div className="flex">
              <DocIcon className="mr-5"/>
              <div className="flex-auto border-b mb-8">
                <VectorIcon className="float-right mt-2.5 mr-69px"/>
                <Typography type="h6" className="mb-2 text-light-blue">Documents</Typography>
                <Typography type="body-large" className="mb-4 text-light-blue">Manage your documents</Typography>
              </div>
            </div>
          </div>
          <div className="flex-1 pl-30px">
            <div className="pt-14 pb-12 border-b">
              <Typography type="h4">Account Settings</Typography>
            </div>
            <div className="py-12 border-b ">
              <Typography type="h5" className="mb-4">Company information</Typography>
              <Typography type="body-large" className="mb-8">
                Fill in the required information about your company below.
              </Typography>
              <div className="pr-110px">
                <CompanyPlaceholderIcon className="mx-auto"/>
                <Typography type="body-medium" className="my-4 text-blue text-center">Set new company logo</Typography>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={AccountSettingsSchema}
                onSubmit={(
                  values: AccountSettingsProps,
                  { setSubmitting }: FormikHelpers<AccountSettingsProps>
                ) => {

                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(true);
                  }, 500);
                }}
              > 
                <Form>
                  <div className="flex flex-wrap">
                    <InputField
                      name="fullName"
                      placeholder="Full name"
                      className="w-300px h-8.5 mt-8 mb-6 mr-12"
                    />
                    <InputField
                      name="email"
                      placeholder="Email"
                      className="w-300px h-8.5 mt-8"
                    />
                    <InputField
                      name="companyName"
                      placeholder="Company name"
                      className="w-300px h-8.5 mb-6 mr-12"
                    />
                    <InputField
                      name="officialWebsite"
                      placeholder="Official website"
                      className="w-300px h-8.5"
                    />
                    <InputField
                      name="dateOfEstablishment"
                      placeholder="Date of establishment"
                      className="w-300px h-8.5 mr-12 mb-6"
                    />
                    <InputField
                      name="phoneNumber"
                      placeholder="Phone number"
                      className="w-300px h-8.5"
                    />
                    <InputField
                      name="city"
                      placeholder="City"
                      className="w-300px h-8.5 mr-12"
                    />
                    <InputField
                      name="street"
                      placeholder="Street"
                      className="w-300px h-8.5"
                    />
                  </div>
                </Form>
              </Formik>
            </div>
            <div className="py-12 border-b">
              <Typography type="h5" className="mb-4">Security</Typography>
              <Typography type="body-large">
                Manage your passwords here. We recommend that you set a strong password that you don&apos;t use anywhere else.
              </Typography>
              <Formik
                initialValues={initialValues}
                validationSchema={AccountSettingsSchema}
                onSubmit={(
                  values: AccountSettingsProps,
                  { setSubmitting }: FormikHelpers<AccountSettingsProps>
                ) => {

                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(true);
                  }, 500);
                }}
              > 
                <Form>
                  <InputField
                    name="currentPassword"
                    placeholder="Current password"
                    className="w-300px h-8.5 mt-8 mb-6"
                  />
                  <InputField
                    name="newPassword"
                    placeholder="New password"
                    className="w-300px h-8.5 mb-6"
                  />
                  <InputField
                    name="confirmNewPassword"
                    placeholder="Confirm new password"
                    className="w-300px h-8.5"
                  />
                </Form>
              </Formik>
            </div>
            <div className="flex pt-12">
              <Button
              nameBtn="primary"
              type="submit"
              label="Save changes"
              className="mr-14 disabled:bg-green-inactive"
              form="documentForm"
              />
              <Button
              nameBtn="tertiary"
              type="submit"
              label="Cancel"
              className="mt-53px disabled:bg-green-inactive"
              />
            </div>
            <div className="mb-59px py-12 border-b text-black">
              <Typography type="h5" className="mb-4">Documents</Typography>
              <Typography type="body-large" className="mb-12">
                You can manage your documents here. We need your documents to prove that you company is real.
              </Typography>
              <form onSubmit={submit} id="documentForm" encType="multipart/form-data">
                <input onChange={fileSelected} type="file" name="document" className="hidden" id="documentInput"/>
              </form>
              <div className="flex-auto flex-col justify-center">
                <label htmlFor="documentInput" className="cursor-pointer">
                  <div className="py-6 border border-dashed border-grey border-box rounded-4px">
                    <ImagesLoad className="mx-auto mb-9"/>
                    <Typography type="body-semibold" className="text-center">Click to browse files</Typography>
                  </div>
                </label>
              </div>
              <div className="flex justify-between items-center mt-8 py-4 pr-2 bg-light-grey text-white rounded-12px">
                <div className="flex items-center">
                  <DocVectorIcon className="mx-2"/>
                  <div className="flex flex-col">
                    <Typography type="body-small-medium">Buildingandco.doc</Typography>
                    <Typography type="placeholder-small">159 Kb</Typography>
                  </div>
                </div>
                <CloseIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};