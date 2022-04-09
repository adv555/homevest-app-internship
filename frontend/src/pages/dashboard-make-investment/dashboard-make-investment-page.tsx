import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import Button from "components/common/button/button";
import { Typography } from "components/common/typography/typography";
import { InvestmentDetails } from "./components/investment-details/investment-details";
import { DetailsCompany } from "./components/make-investment-datails-company/make-investment-details-company";
import { PaymentInformation } from "./components/make-investment-payment-information/make-investment-payment-informatiom";
import { MakeInvestmentInputSchema } from "common/input-models/make-investment-input-schema";
import { Dashboardlayout } from "components/layouts/dashboard-layout";
import { Header } from "components/Navigation/Header";
import { Logo } from "components/Navigation/Logo";
import SideBarDashboard from "components/Navigation/SideBarDashboard/SideBarDashboard";
import { MakeInvestmentActionCreators } from "store/slices";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMakeInvestmentState } from "store/make-investment/makeInvesmtnetSelectors";
import { AppBar } from "components/Navigation/AppBar";

export const DashboardMakeInvestmentPage: React.FC = () => {
  const [active, setActive] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const { estateId } = useParams() as { estateId: string };
  const { estate, estateLoading, isSubmitting } = useSelector(getMakeInvestmentState);

  const isDisabled = estateLoading || isSubmitting;

  const submitData = (values: any) => {
    dispatch(MakeInvestmentActionCreators.submitInvestmentData(estateId, {
      ...values,
      expirationYear: Number(values.expirationYear),
      paymentAmount: Number(values.paymentAmount),
    }));
  }

  useEffect(() => {
    dispatch(MakeInvestmentActionCreators.fetchEstateForInvestment(estateId));
  }, [dispatch]);

  const onMenuClick = () => {
    setActive(!active)
  }
  return (
    <>
      <Header position="left-0 justify-center py-6 px-75px ">
        <Logo onClick={onMenuClick} />
        <AppBar button={true} />
      </Header>

      <Dashboardlayout>

        <Formik
          initialValues={{
            fullName: '',
            country: '',
            street: '',
            companyName: '',
            city: '',
            zipcode: '',
            nameOfBank: '',
            cardNumber: '',
            cvv: '',
            nameOfCard: '',
            expirationYear: '',
            paymentAmount: '',
            agreeTerms: false,
            agreeRisks: false,
          }}
          validationSchema={MakeInvestmentInputSchema}
          onSubmit={submitData}
        >
          <Form>
            <div className="flex flex-row h-full mt-0">
              <div className="w-184 py-14 border-r border-background">
                <Typography type="h4">
                  Investment confirmation
                </Typography>
                <Typography type="body-large-medium" className="mt-6 w-159">
                  To complete the invesment process, enter the following information. In the fileds concerning the address, enter your company address.
                </Typography>
                <DetailsCompany disabled={isDisabled} />
                <PaymentInformation disabled={isDisabled} />
                <Button nameBtn="primary" className="mt-12 disabled:bg-green-inactive" type="submit" disabled={isDisabled}>
                  Confirm
                </Button>
              </div>
              <div>
                <InvestmentDetails estate={estate} />
              </div>
            </div>
          </Form>
        </Formik>
        {active && <SideBarDashboard isLoggedIn={isLoggedIn} />}
      </Dashboardlayout>
    </>
  )
};
