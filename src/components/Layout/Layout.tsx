import { ReactElement } from 'react';
import { Box, Container } from "@mui/material";

import {
    LayoutContainer,
    LayoutContent
} from './Layout.styles';
import NavBar from '../NavBar/NavBar';

type Props = {
    id?: string;
    notice?: ReactElement;
    children?: ReactElement;
};

const Layout = ({
    id,
    notice,
    children
}: Props): ReactElement => {
    return (
        <LayoutContainer
            role="main"
            id={id || 'layout-container'}>
            <Box>
                <NavBar />
            </Box>
            <Container maxWidth="lg">
                <LayoutContent>
                    {notice}
                    {children}
                </LayoutContent>
            </Container>
        </LayoutContainer>
    );
};

export default Layout;