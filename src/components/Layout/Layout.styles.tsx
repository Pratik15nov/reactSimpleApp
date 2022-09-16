import {
    Box,
    styled,
} from "@mui/material";

export const LayoutContainer = styled(Box)(({
    theme
}) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
}));

export const LayoutContentWithSideBar = styled(Box)(({
    theme
}) => ({
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridGap: theme.spacing(2),
}));

export const LayoutContent = styled(Box)(({
    theme
}) => ({
    overflow: 'scroll',
    maxHeight: 'calc(100vh - 80px)',
    padding: theme.spacing(2, 2, 0, 2),
}));
