import { useState, useEffect } from 'react'
import * as S from './styles.jsx'
import Qr from 'qrcode.react'
import { useNavigate } from 'react-router-dom'

import api from '../../services/api.js'

//COMPONENTES:
import Header from '../../components/Header/header.jsx'
import Footer from '../../components/Footer/footer.jsx'

function QrCode(){

    const[mac, setMac] = useState('')

    const navigate = useNavigate()

    async function SaveMac(){
        if(!mac)
        alert('Você precisa informar o número que apareceu no celular')
        
        else{
            await localStorage.setItem('@ToDo/macaddress', mac)
            navigate('/')
            window.location.reload()
        }
    }

    return(
    <S.Container>
        <Header></Header>

        <S.Content>
            <h1>CAPTURE O QRCODE PELO APP</h1>
        <S.QrCodeArea>
            <Qr value='getmacaddress' size={400}/>
        </S.QrCodeArea>

        <S.ValidationCode>
            <span>Digite o número que aparece no seu celular</span>
            <input type='text'
            onChange={e=> setMac(e.target.value)}
            value={mac}
            ></input>
            <button type='button'
            onClick={SaveMac}
            >SINCRONIZAR</button>
        
        </S.ValidationCode>
            
            <p>Suas atividades serão sincronizadas com a do seu celular</p>
        </S.Content>
        
        <Footer></Footer>
    </S.Container>
    
    
    )
}

export default QrCode