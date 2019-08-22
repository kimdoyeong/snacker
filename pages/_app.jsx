import React from "react";
import App from "next/app";
import Layout from "../components/layout";
import ThemeProvider from "../components/ui/theme";

import "../styles/style.scss";

export default class extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
