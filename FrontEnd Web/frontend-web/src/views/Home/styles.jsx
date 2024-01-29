import styled from 'styled-components'

export const container = styled.div`
    width: 100%;
    
`

export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;

    button{
        background: none;
        border: none;
    }
`
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 50px;
    justify-content: center;
    margin-bottom: 80px;

    a{
        text-decoration: none;
        color: #20295F;
    }
`

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #20295F;
    display: flex;
    justify-content: center;
    h1{
        color: #20295F;
        position: relative;
        top: 38px;
        background: #FFF;
        padding: 0 25px;

    }
`