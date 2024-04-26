import { AppBar, Badge, Box, InputBase, Toolbar, Tooltip, styled } from '@mui/material'
import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    padding: '10px',
    justifyContent: 'space-between'
})

const Search = styled("div")(({theme}) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '20%'
}))

const Icons = styled(Box)(({theme}) => ({
    display: 'none',
    alignItems: 'center',
    gap: 12,
    [theme.breakpoints.up("sm")]: {
        display: 'flex'
    }
}))

function Header() {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    console.log('cartItems', cartItems);

    const shoppingCartHandler = ()=> {
        navigate('/cart')
    }
  return (
    <>
    <Box>
    <AppBar position='sticky'>
        <StyledToolbar>
            <Tooltip title="Home" placement='right'>
            <Box 
            sx={{cursor: 'pointer'}}
            onClick={()=> navigate('/')}
            component="img"
            src={logo}
            width={50}
            >

            </Box>

            </Tooltip>
            <Search><InputBase placeholder='Search..' /></Search>
            <Icons>
                <Tooltip title="Cart" placement='left'>
                <Badge sx={{cursor: 'pointer'}}   badgeContent={cartItems.length} color='error' showZero>
                    <ShoppingCartIcon onClick={shoppingCartHandler}  />
                </Badge>

                </Tooltip>
            </Icons>
        </StyledToolbar>
    </AppBar>
    </Box>
    </>
  )
}

export default Header