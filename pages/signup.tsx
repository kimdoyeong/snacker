import React from "react";
import { NextPage } from "next";
import Contents from "../components/ui/Contents";
import SEO from "../components/ui/SEO";
import SignUp from "../components/signup";

const SignUpPage: NextPage = () => (
  <Contents>
    <SEO title="회원가입" />
    <SignUp />
  </Contents>
);

export default SignUpPage;
