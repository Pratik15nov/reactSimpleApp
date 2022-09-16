const GREY = {
  50: "#FAFAFA",
  100: "#F5F5F5",
  200: "#EAE6E4",
  300: "#E0E0E0", // GRAY 3
  400: "#AFACAA",
  500: "#A6A6A6", // GRAY 1
  600: "#767680",
  700: "#626262", // GRAY 2
  800: "#585858",
  900: "#2E2C2C", // SOFT BLACK
};

const PRIMARY = {
  light: "#4aa1ff",
  main: "#007aff",
  dark: "#0d68ca",
};

const SECONDARY = {
  light: "#ffffff",
  main: "#fafafb",
  dark: "#C2C2C6",
};
const INFO = {
  light: "#7F9FAD",
  main: "#608899",
  dark: "#435F6B",
};
const SUCCESS = {
  light: "#AAF27F",
  main: "#378d1b",
  dark: "#229A16",
};

export const ERROR = {
  light: "#E8807F",
  main: "#E04F50",
  dark: "#DA1F2F",
};

export const LOGINSCREEN = {
  leftNavigation: "#1f2e96",
  background: "#002B6F",
  elements: "#006EDE",
  dataVisualization: "#2CFFED",
  headerBackground: "#FFFFFF",
};

export const LANDINGPAGE = {
  background: "#001428",
  buttons: "#2CFFED",
  bodyBackground: "#FFFFFF"
};

const COMMON = {
  black: "#000000",
  white: "#FFFFFF",
  activeGreen: "#5BBC76",
  switchEnabled: "#5ABC76",
  switchEnabledBackground: "#BBE1BD",
  switchDisabled: "#E04F50",
  switchDisabledBackground: "#DBA4A4",
  itemListBackground: "#E1EDFB",
  splitButtonBackground: "#E9F2F8",
  rowHoverBackground: "#E6F2FF",
  gridHeaderBackground: "#EFEEF0",
  gridHeaderBorder: "#D3D3D6",
  chipGreen: "#DEF2E4",
  chipBlue: "#E6F2FF",
  listDivider: "#BFBFBF",
  accordionChildBackground: "#F2F8FF",
  dataGridTopHeader: "#838387",
  modalBackground: "#FFFFFFB3",
  sidebarBackground: "#7676761f",
  sidebarFooterBackground: "#1f2e96",
  boxShadow: "#00000026",
  inputOutline: "#3C3C43",
  subTitle: "#383842",
  progressBarBg: "007AFF1A",
  warningYellow: '#EBC500',
};

const palette = {
  common: {
    ...COMMON,
  },
  primary: {
    ...PRIMARY,
  },
  secondary: {
    ...SECONDARY,
  },
  info: {
    ...INFO,
  },
  success: {
    ...SUCCESS,
  },
  warning: {
    ...ERROR,
  },
  error: {
    ...ERROR,
  },
  grey: GREY,
  text: {
    primary: "#383842",
    secondary: GREY[600],
    disabled: GREY[500],
    hint: "#909090",
    info: "#3C3C4399"
  },
  background: {
    paper: "#FFFFFF",
    default: "#FFFFFF",
  },
  action: {
    disabledBackground: GREY[500],
  },
  boxshadow: {
    grey: "rgba(0, 0, 0, 0.25)",
  },
  login: {
    ...LOGINSCREEN,
  },
  landing: {
    ...LANDINGPAGE
  },
};

export default palette;
