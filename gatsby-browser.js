// gatsby-browser.js
import * as React from "react";
import { navigate } from "gatsby";

import { AuthConfig } from "react-use-auth";
import { Auth0 } from "react-use-auth/auth0";

export const wrapRootElement = ({ element }) => (
    <>
        <AuthConfig
            navigate={navigate}
            authProvider={Auth0}
            params={{
                domain: "useauth.auth0.com",
                clientID: "GjWNFNOHqlino7lQNjBwEywalaYtbIzh"
            }}
        />
        {element}
    </>
);