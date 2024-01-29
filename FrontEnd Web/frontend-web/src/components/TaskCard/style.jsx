import styled from 'styled-components'

export const Container = styled.div`
    width: 300px;
    height: 240px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.50);
    border-radius: 8px;
 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    transition: 0.4s;
    opacity: ${props => JSON.parse(props.done) ? 0.3 : 1};

    &:hover{
        opacity: 0.4;
    }

`
export const TopCard = styled.div`
    display: flex;
    align-items: flex;
    justify-content: center;
    flex-direction: column;
    img{
        width: 80px;
        margin:auto;
    }
    margin: auto;
    margin-top: 20px;

`
export const BottomCard = styled.div`
    width: 100px; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: auto;
    margin-top: -10px;

    strong{
        color: #EE6B26;
        font-weigth: bold;
    }

`