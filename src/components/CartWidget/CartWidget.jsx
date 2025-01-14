import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../context/cart/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function CustomizedBadges() {
    const {totalCuantityCart} = useContext(CartContext)
    const navigate = useNavigate()
    return (
        <IconButton aria-label="cart" onClick={() => navigate(`/Cart`)}>
            <StyledBadge badgeContent={totalCuantityCart} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    );
}