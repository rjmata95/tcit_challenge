import React from "react";
import { Container, ThemeProvider } from "@material-ui/core";
import { Background } from "./styles";
import { theme } from "./styles/theme";
const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Background>
      <Container maxWidth="lg">{children}</Container>
    </Background>
  </ThemeProvider>
);

export default Layout;
