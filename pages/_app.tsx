import * as React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
}
