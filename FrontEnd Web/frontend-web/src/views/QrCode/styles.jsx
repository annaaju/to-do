import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    
`
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;

    h1{
        color: #EE6B26;
        font-size: 2.5em;
    }

    p{
        color: #20295F;
        font-weight: 600;
        font-size: 1.3em;
    }
`

export const QrCodeArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`

export const ValidationCode = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px;

    span{
        font-weight: 600;
        font-size: 1.3em;
        color: #20295F;
        padding: 10px;
    }

    input{
        display: flex;
        width: 50%;
        height: 5vh;
        margin: auto;
        border: 2px solid #20295F;
        border-radius: 20px;
        font-weight: bold;
        font-size: 1.4em;
        color: #20295F;
        text-align: center;
    }

    button{
        font-weight: bold;
        background: #EE6B26;
        color: #fff;
        font-size: 1.4em;
        border: none;
        border-radius: 30px;
        padding: 15px;
        cursor: pointer;
        margin-top: 25px;
        transform: 0.3s;
    }

    button:hover{
        background-color: #20295F;
        transform: scale(1.02);
    }

`