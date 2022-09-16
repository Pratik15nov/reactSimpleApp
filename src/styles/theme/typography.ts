import { createTheme } from "@mui/material/styles";

import palette from "./palette";

export const SYSTEM_FONTS = [
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

const PUBLIC_SANS = "PublicSans";
const NOTO_SANS = "NotoSans";
const ROBOTO = "Roboto";
const defaultTheme = createTheme();

const typography = {
  fontFamily: [PUBLIC_SANS, NOTO_SANS, ROBOTO, ...SYSTEM_FONTS].join(","),
  fontFamilySystem: SYSTEM_FONTS.join(","),
  h1: {
    fontWeight: 800,
    fontSize: defaultTheme.typography.pxToRem(24),
    color: palette.common.black,
  },
  h2: {
    fontWeight: 300,
    fontSize: defaultTheme.typography.pxToRem(20),
    color: palette.common.black,
  },
  h3: {
    fontWeight: 300,
    fontSize: defaultTheme.typography.pxToRem(16),
    color: palette.common.black,
  },
  h4: {
    fontWeight: 600,
    fontSize: defaultTheme.typography.pxToRem(22), //TODO: We need to change this, h4 should not be bigger than h3, h2 and h1.
    color: palette.common.black,
  },
  h5: {
    fontWeight: 400,
    fontSize: defaultTheme.typography.pxToRem(14),
    color: palette.text.primary,
  },
  h6: {
    fontWeight: 500,
    fontSize: defaultTheme.typography.pxToRem(12),
    color: palette.common.black,
  },
  subtitle1: {
    fontWeight: 700,
    fontSize: defaultTheme.typography.pxToRem(14),
    color: palette.text.primary,
  },
  subtitle2: {
    fontWeight: 700,
    fontSize: "14px",
    color: palette.primary.main,
  },
  pageTitle: {
    fontSize: defaultTheme.typography.pxToRem(34),
    fontWeight: 800,
    lineHeight: 1,
  },
  label: {
    fontSize: defaultTheme.typography.pxToRem(16),
    fontWeight: 600,
    lineHeight: 1.18,
  },
  formTitle: {
    fontSize: defaultTheme.typography.pxToRem(24),
    fontWeight: 700,
    lineHeight: 1.16,
  },
  modalTitle: {
    fontSize: defaultTheme.typography.pxToRem(26),
    fontWeight: 300,
    lineHeight: 1.1,
  },
  modalSubtitle: {
    fontSize: defaultTheme.typography.pxToRem(16),
    fontWeight: 300,
    lineHeight: 1.22,
  },
  footerNote: {
    fontSize: defaultTheme.typography.pxToRem(12),
    fontWeight: 500,
    lineHeight: 1.16,
  },
  errorText: {
    fontSize: defaultTheme.typography.pxToRem(12),
    fontWeight: 400,
    lineHeight: 1.66,
    color: palette.error.main,
  },
  TextBoxTitle: {
    fontSize: defaultTheme.typography.pxToRem(12),
    fontWeight: 400,
    lineHeight: 1.4375,
    color: palette.text.hint,
  },
  formTitle2:{
    fontSize:defaultTheme.typography.pxToRem(18),
    fontWeight:700,
  },
  label2:{
    fontSize:defaultTheme.typography.pxToRem(14),
    fontWeight:600,
    color:palette.text.primary,
  },
  borderBoxText:{
    fontSize:defaultTheme.typography.pxToRem(16),
    fontWeight:400,
  },
  subInfo: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 400,
    lineHeight: 1,
    color: palette.text.info,
  },
  cells: {
    fontSize: defaultTheme.typography.pxToRem(16),
    fontWeight: 400,
    lineHeight: 1.2,
    color: palette.text.info
  },
  filterUnchecked: {
    fontWeight: 400,
    fontSize: defaultTheme.typography.pxToRem(16),
    color: palette.text.primary,
  },
  filterChecked: {
    fontWeight: 700,
    fontSize: defaultTheme.typography.pxToRem(16),
    color: palette.text.primary,
  },
};

export default typography;
