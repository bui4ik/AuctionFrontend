import React from 'react';
import AuthenticationLayout from "../../layouts/AuthenticationLayout";
import RegistrationForm from "./RegistrationForm";

const Registration = () => (
  <AuthenticationLayout title="Create new account">
    <RegistrationForm />
  </AuthenticationLayout>
);

export default Registration;
