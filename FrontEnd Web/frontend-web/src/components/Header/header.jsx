import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'
import * as S from './style.jsx'
import { Link, useNavigate } from "react-router-dom"
import  Task  from '../../views/Task/task.jsx'
import isConnected from '../../utils/isConnected.jsx'

// eslint-disable-next-line react/prop-types
function Header({ lateCount, clickNotification }) {

  const navigate = useNavigate()

  const handleNewTask = () => {
    reset()
    navigate("/task")
 }

    async function Logout(){
      localStorage.removeItem('@ToDo/macaddress')
      window.location.reload()
    }

  return (
    <S.Container>
        <S.LeftSide>
            <img src={logo} alt='logo'/>
        </S.LeftSide>
    
        <S.RightSide>
          <Link to='/'>INÍCIO</Link>
          <span className='dividir' />
          <Link to="/task" onClick={handleNewTask}>NOVA TAREFA</Link>
          <span className='dividir' />
          { !isConnected ?
          <Link to='/qrcode'> SINCRONIZAR CELULAR </Link>
          :
          <button type='button'
          onClick={Logout}
          >SAIR</button>
          }
          { 
            lateCount &&
            <>
            <span className='dividir' />
            <button onClick={clickNotification} id='notification'>  
                <img src={bell} alt='Notificação' />
                <span>{lateCount}</span>       
            </button>
            </>
          }
        </S.RightSide>

    
    </S.Container>
  )
}

export default Header