/* eslint-disable no-unused-vars */
import * as createTypography from '@mui/material/styles/createTypography';
import * as React from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    pageTitle: React.CSSProperties;
    label: React.CSSProperties;
    formTitle: React.CSSProperties;
    modalTitle: React.CSSProperties;
    modalSubtitle: React.CSSProperties;
    footerNote: React.CSSProperties;
    errorText: React.CSSProperties;
    TextBoxTitle: React.CSSProperties;
    formTitle2:React.CSSProperties;
    label2:React.CSSProperties;
    subInfo:React.CSSProperties;
    cells: React.CSSProperties;
    filterChecked: React.CSSProperties;
    filterUnchecked: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    pageTitle?: React.CSSProperties;
    label: React.CSSProperties;
    formTitle: React.CSSProperties;
    modalTitle: React.CSSProperties;
    modalSubtitle: React.CSSProperties;
    footerNote: React.CSSProperties;
    errorText: React.CSSProperties;
    TextBoxTitle: React.CSSProperties;
    formTitle2:React.CSSProperties;
    label2:React.CSSProperties;
    subInfo:React.CSSProperties;
    cells: React.CSSProperties;
    filterChecked: React.CSSProperties;
    filterUnchecked: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    pageTitle: true;
    label: true;
    formTitle: true;
    modalTitle: true;
    modalSubtitle: true;
    footerNote: true;
    errorText: true;
    TextBoxTitle: true;
    formTitle2:true;
    label2:true;
    borderBoxText:true;
    subInfo:true;
    cells:true;
    filterChecked: true;
    filterUnchecked: true;
  }
}
