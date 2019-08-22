import React from "react";
import Head from "next/head";

interface SEOProps {
  title?: string;
}
const SEO: React.FC<SEOProps> = ({ title }) => (
  <Head>
    <meta charSet="utf-8" />
    <title>{title ? title + " - Snacker" : "Snacker"}</title>
  </Head>
);

export default SEO;
