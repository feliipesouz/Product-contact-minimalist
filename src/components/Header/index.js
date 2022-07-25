import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Container, Button } from './styles';

const Header = () => {
    const params = useParams();
    return (
        <>
            <Container>{params.id}
                <Button><NavLink to='/'>Produto</NavLink></Button>
                <Button><NavLink to='contato'>Contato</NavLink></Button>
            </Container>
        </>
    )
};

export default Header;