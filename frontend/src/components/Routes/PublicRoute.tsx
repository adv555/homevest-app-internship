import { AppRoute } from "common/enums";
import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({component: Component, isAuth, ...rest}: any) => {
    return (
        <Route {...rest} render={props => (
            isAuth ?
                <Redirect to={AppRoute.HOME_PAGE} />
            : <Component {...props} />
        )} />
    );
};

export {PublicRoute};