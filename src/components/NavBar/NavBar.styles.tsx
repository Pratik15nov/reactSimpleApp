import { styled, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledToolbar = styled(Toolbar)(({
    theme
}) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 8fr auto',
    padding: `${theme.spacing(1)} 0px`
}));

export const StyledLink = styled(Link)<{ active: string }>(
({ theme, active }) => ({
    margin: `${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(2)} 0px`,
    fontWeight: '700',
    color: active === '1' ? `${theme.palette.text.secondary}` : `${theme.palette.common.white}`,
    textDecoration: 'none',
    display: 'block'
}));