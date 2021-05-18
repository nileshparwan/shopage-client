// import { CookiesProvider } from 'react-cookie';
import App from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import BootstrapGrid from '../styles/bootstrapGrid';
import BootstrapReboot from '../styles/bootstrapReboot';
import ColorsStyles from '../styles/colors';

const SiteGlobalStyle = createGlobalStyle<Record<string, any>>`
  ${BootstrapReboot}
  ${BootstrapGrid}
  ${ColorsStyles}
`;

class MyApp extends App<any> {
  constructor(props: any) {
    super(props);
    if (typeof window === 'undefined') {
      (global as any).window = {};
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <SiteGlobalStyle />
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

export function reportWebVitals(metric) {
  console.log(metric);
}

export default MyApp;
