import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #20295F;
    border-bottom: 5px solid #EE6B26;
    display: flex;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    padding: 8px;
    img{
        width: 130px;
        height: 60px;
    }
    
`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
   
    a, button{
        text-decoration: none;
        color: #FFF;
        font-weight: bold;
        margin: 0 12px;
        transition: 0.5s;
    }
    
    a:hover{
        color: #EE6B26;
        transform: scale(1.05);
    }

    button:hover{
        color: #EE6B26;
        transform: scale(1.05);
    }

    button{
        background: none;
        border: none;
    }

    #notification{
        img{
            width: 25px;
            height: 30px;
        }
        
        span{
            background: #FFF;
            color: #EE6B26;
            padding:3px 7px;
            border-radius: 50%;
            position: relative;
            top: -20px;
            right: 10px;
        }

        &:hover{
            opacity: 50%
        }
    }

    .dividir::after{
        content: "|";
        margin: 0 10px;
        color: #FFF;
    }

    button{
        font-size: 16px;
    }

`