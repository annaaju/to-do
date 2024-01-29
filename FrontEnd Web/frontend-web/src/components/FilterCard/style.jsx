import styled from 'styled-components'

export const Container = styled.div`
    width: 250px;
    height: 60px;
    background: ${ props => props.actived ? '#EE6B26' : '#20295F'};
    border-radius: 10px;
    cursor: pointer;
    display: flex;

    p{
        color: #FFF;
        margin: auto;
        font-weight: bold;
        font-size: 1.7em;
    }

    &:hover{
        background: #EE6B26;
    }

`