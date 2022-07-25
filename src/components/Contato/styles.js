import styled from 'styled-components';

export const Section = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
`;

export const Titulo = styled.h1`
    font-size: 2rem;
    color: black;
`;

export const ImagemContato = styled.img`
    margin: 5px;
`;

export const Informacoes = styled.ul`
    padding: 0px;
    list-style: none;
`;

export const Info = styled.li`
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 0.8rem;
    &:before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 2px;
        background: #ddd;
        margin-right: 10px;
    }
`;
