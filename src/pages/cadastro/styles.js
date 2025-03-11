import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 100px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-family: Open Sans;
`

export const Title = styled.h3`
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #FFFFFF;

`

export const Subtitle = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
`

export const Text = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;

`

export const JaTenhoConta = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;

`

export const Column = styled.div`
    flex:${({flex}) => flex};
    padding: 42px;

`

export const FazerLogin =  styled.p`
    font-family: Open Sans;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;

    color: #23DD7A;

`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 24px 0;
`




