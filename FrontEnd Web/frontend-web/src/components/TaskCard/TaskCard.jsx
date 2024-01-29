import {useMemo} from 'react'
import * as S from './style.jsx'
import { format } from 'date-fns'
import typeIcons from '../../utils/typeicons.jsx'


const TaskCard = ({type, title, when, done, onClick}) => {

  const date = useMemo(()=> format(new Date(when), 'dd/MM/yyyy') )
  const hour = useMemo(()=> format(new Date(when), 'HH:mm') )

  return (
  <S.Container onClick={onClick} done={!!done}>
    <S.TopCard>
      <img src={typeIcons[type]} alt='Icone da Tarefa'/>
      <h2>{title}</h2>
    </S.TopCard>
    <S.BottomCard>
      <strong>{date}</strong>
      <p>{hour}</p>
    </S.BottomCard>
  </S.Container>
  )
}

export default TaskCard