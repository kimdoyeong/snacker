import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import Email from "@material-ui/icons/Email";

const LabelWithIcon: React.FC<{
  icon: React.ReactNode;
  label: string;
}> = ({ icon, label }) => {
  return (
    <div>
      {icon}
      <Typography variant="">{label}</Typography>
    </div>
  );
};
const SignUpForm: React.FC = () => {
  return (
    <form
      style={{
        padding: "20px 30px"
      }}
    >
      <TextField
        id="email"
        type="email"
        label={<LabelWithIcon icon={<Email />} label="이메일" />}
        fullWidth
        margin="normal"
      />
    </form>
  );
};

export default SignUpForm;
