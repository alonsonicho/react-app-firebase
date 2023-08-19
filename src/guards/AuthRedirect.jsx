import React from "react";
import { Navigate, useSearchParams } from "react-router-dom";

const redirectTo = {
  resetPassword: ({ mode, oobCode, lang }) =>
    `/reset-password?mode=${mode}&oobCode=${oobCode}&lang=${lang}`,
  verifyEmail: ({ mode, oobCode, lang }) =>
    `/confirm-email?mode=${mode}&oobCode=${oobCode}&lang=${lang}`,
};

const NavigateTo = ({ mode, oobCode, lang }) => {
  const path = redirectTo[mode] ? redirectTo[mode]({ mode, oobCode, lang }) : "*";
  return <Navigate to={path} />;
};

const AuthRedirect = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const oobCode = searchParams.get("oobCode");
  const lang = searchParams.get("lang");

  return <NavigateTo mode={mode} oobCode={oobCode} lang={lang} />;
};

export default AuthRedirect;
