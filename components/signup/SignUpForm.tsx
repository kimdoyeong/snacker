import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import EmailIcon from "@material-ui/icons/Email";
import KeyIcon from "@material-ui/icons/VpnKey";
import UserIcon from "@material-ui/icons/PermIdentity";
import FormatListIcon from "@material-ui/icons/FormatListNumbered";
import SignUpFormChecker from "./SignUpFormChecker";

const LabelWithIcon: React.FC<{
  icon: React.ReactNode;
  label: string;
}> = ({ icon, label }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center"
      }}
    >
      {icon}
      <Typography
        variant="body2"
        component="span"
        style={{ padding: "0 10px" }}
      >
        {label}
      </Typography>
    </div>
  );
};

interface InputProps {
  id: string;
  type?: string;
  label: React.ReactNode;
  value: string;
  onChange: React.ChangeEventHandler;
  error: boolean;
  helperText?: string;
}
const Input: React.FC<InputProps> = ({
  id,
  type,
  label,
  value,
  onChange,
  error,
  helperText
}) => (
  <TextField
    id={id}
    type={type || "text"}
    label={label}
    fullWidth
    margin="normal"
    value={value}
    onChange={onChange}
    error={error}
    helperText={helperText}
  />
);
interface ObjectInterface {
  [key: string]: string;
}
interface ObjectBoolInterface {
  [key: string]: boolean;
}

const SignUpForm: React.FC = () => {
  const defaultValue: ObjectInterface = {
    email: "",
    password: "",
    name: "",
    idNumber: ""
  };
  const defaultBoolValue: ObjectBoolInterface = {
    email: false,
    password: false,
    name: false,
    idNum: false
  };

  const [fields, setFields] = useState(defaultValue);
  const [errors, setErrors] = useState(defaultBoolValue);
  const [messages, setMessages] = useState(defaultValue);
  useEffect(() => {
    const _messages = { ...messages };
    const _errors = { ...errors };
    for (const field of Object.keys(fields)) {
      if (!SignUpFormChecker[field]) continue;

      const checker = SignUpFormChecker[field](fields[field]);
      _messages[field] = checker.message || "";
      _errors[field] = !checker.valid;
    }
    setErrors(_errors);
    setMessages(_messages);
  }, [fields]);
  function setField(field: string) {
    const handler: React.ChangeEventHandler = e => {
      const target: any = e.target;
      setFields({ ...fields, [field]: target.value });
    };

    return handler;
  }
  function message(field: string) {
    return messages[field] || undefined;
  }
  function isError(field: string) {
    return errors[field] || false;
  }
  const onSubmit: React.FormEventHandler = e => {
    e.preventDefault();
    for (const error in errors) {
      if (error) {
        alert("폼을 다시 확인해 주세요.");
        return;
      }
    }
    //TODO: Submit auth
  };
  return (
    <form
      style={{
        padding: "20px 30px"
      }}
      onSubmit={onSubmit}
    >
      <Input
        id="email"
        type="email"
        label={<LabelWithIcon icon={<EmailIcon />} label="이메일" />}
        value={fields.email}
        onChange={setField("email")}
        error={isError("email")}
        helperText={message("email")}
      />
      <Input
        id="password"
        type="password"
        label={<LabelWithIcon icon={<KeyIcon />} label="비밀번호" />}
        value={fields.password}
        onChange={setField("password")}
        error={isError("password")}
        helperText={message("password")}
      />
      <Input
        id="name"
        label={<LabelWithIcon icon={<UserIcon />} label="이름" />}
        value={fields.name}
        onChange={setField("name")}
        error={isError("name")}
        helperText={message("name")}
      />
      <Input
        id="id_number"
        label={<LabelWithIcon icon={<FormatListIcon />} label="학번" />}
        value={fields.idNumber}
        onChange={setField("idNumber")}
        error={isError("idNumber")}
        helperText={message("idNumber")}
      />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button color="secondary" variant="contained" type="submit">
          가입하기
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
