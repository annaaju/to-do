import styled from 'styled-components'

export const container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const Form = styled.div`
    width: 60%;
    margin: auto;
`

export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .inative{
        opacity: 0.3;
    }

    button{
        background: none;
        border: none;
    }

    img{
        width:50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;
    }

    img:hover{
        opacity: 0.5;
    }
`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 16px 0 16px 0;

    span{
        color: #707070;
    }

    input{
        font-size: 1.3em;
        padding: 15px;
        border: none;
        border-bottom: 2px solid #EE6B26;
        outline: none;
    }

`

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 16px 0 16px 0;

    span{
        margin: 16px 0 16px 0;
        color: #707070;
    }

    textarea{
        font-size: 1.2em;
        padding: 14px;
        border: 2px solid #EE6B26;
        border-radius: 6px;
        outline: none;
    }

`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;

    button{
        border: none;
        background: none;
        font-weight: bold;
        color: #20295F;
        font-size: 1.4em;
        cursor: pointer;
        transition: 0.3s;      
    }

    button:hover{
        opacity: 0.5;
    }

    div{
        display: flex;
        align-itens: center;
        color: #EE6B26;
        font-weight: bold;
        font-size: 1.3em;
    }

    div > input{
        width: 20px;
        margin-right: 8px;
        outline: none;
    }
`

export const Save = styled.div`
    width: 100%;
    margin-top: 40px;
    display: block;
    text-align: center;

    button{
        max-width: 600px;
        width: 100%;
        background: #EE6B26;
        border: none;
        color: #FFF;
        font-weight: bold;
        padding: 24px;
        font-size: 1.6em;
        border-radius: 30px;
        cursor: pointer;
        transition: 0.3s;
    }

    button:hover{
        transform: scale(1.02);
        opacity: 0.7;
    }
`