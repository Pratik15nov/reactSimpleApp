/* eslint-disable no-unused-vars */
import * as createPalette from '@mui/material/styles/createPalette';

/****
 * DO NOT REMOVE createPalette import.
 * The createPalette is imported here to extend the existing theme
 * and support Typescript module augmentation.
 * MUI Reference => https://mui.com/customization/theming/
 * Typescript Reference =>
 * https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
 */

interface LoginColors {
  leftNavigation: string
  background: string
  elements: string
  dataVisualization: string
  headerBackground: string
}
declare module '@mui/material/styles/createPalette' {
  export interface CommonColors {
    black: string,
    white: string,
    activeGreen: string,
    switchEnabled: string,
    switchEnabledBackground: string,
    switchDisabled: string,
    switchDisabledBackground: string,
    itemListBackground: string,
    splitButtonBackground: string,
    rowHoverBackground: string,
    gridHeaderBackground: string,
    gridHeaderBorder: string,
    chipGreen: string,
    chipBlue: string,
    listDivider: string,
    accordionChildBackground: string,
    dataGridTopHeader: string,
    modalBackground: string,
    sidebarBackground: string,
    sidebarFooterBackground: string,
    boxShadow: string,
    inputOutline: string,
    subTitle: string,
    progressBarBg: string,
    warningYellow: string,
    login: LoginColors
  }
}
