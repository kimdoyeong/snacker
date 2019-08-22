import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import SignUpForm from "./SignUpForm";
const SignUp: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Paper style={{ padding: "2em" }}>
        <Typography variant="h4" component="h1">
          Get some snacks on this place.
        </Typography>
        <SignUpForm />
      </Paper>
    </Container>
  );
};

export default SignUp;
