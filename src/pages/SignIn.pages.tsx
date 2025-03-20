import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage, type AuthProvider } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const providers = [{ id: "credentials", name: "Credentials" }];
// preview-start
const BRANDING = {
  logo: (
    <img
      //   src="https://mui.com/static/logo.svg"
      alt="Logo"
      style={{ height: 24 }}
    />
  ),
  title: "POS",
};
// preview-end

const signIn: (provider: AuthProvider) => void = async (provider) => {
  const promise = new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve();
    }, 500);
  });
  await promise;
  return "/app/dashboard";
};

export default function BrandingSignInPage() {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSignIn = async (provider: AuthProvider) => {
    const redirectPath = await signIn(provider);
    navigate(redirectPath);
  };

  return (
    // preview-start
    <AppProvider branding={BRANDING} theme={theme}>
      <SignInPage
        signIn={handleSignIn}
        providers={providers}
        slotProps={{
          emailField: { autoFocus: false },
          form: { noValidate: true },
        }}
      />
    </AppProvider>
    // preview-end
  );
}
