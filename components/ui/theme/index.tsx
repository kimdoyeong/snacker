import React from "react";
import { ThemeProvider as TP } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e8b55d"
    },
    secondary: {
      main: "#1F5B9C"
    }
  }
});

const ThemeProvider: React.FC = ({ children }) => (
  <TP theme={theme}>{children}</TP>
);

export default ThemeProvider;
