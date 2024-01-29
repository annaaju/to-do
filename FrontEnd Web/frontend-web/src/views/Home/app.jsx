import { useState, useEffect } from 'react'
//import React from 'react'
import * as S from './styles.jsx'
import { Link, useNavigate } from 'react-router-dom'

import api from '../../services/api.js'

//COMPONENTES:
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import FilterCard from '../../components/FilterCard/FilterCard'
import TaskCard from '../../components/TaskCard/TaskCard'

import isConnected from '../../utils/isConnected.jsx'


function App() {
  
    const [filterActived, setfilterActived] = useState('all')
    const [Tasks, setTasks] = useState([])
    const [lateCount, setLateCount] = useState()
    
    const navigate = useNavigate()

    async function loadTasks(){
      await api.get(`/task/filter/${filterActived}/${isConnected}`)
      .then(response =>{
          setTasks(response.data)
      })
    }

    async function lateVerify(){
      await api.get(`/task/filter/late/${isConnected}`)
      .then(response =>{
          setLateCount(response.data.length)
      })
    }

    function Notification(){
      setfilterActived('late')
    }

    useEffect(()=> {
      loadTasks()
      lateVerify()

      if(!isConnected)
        navigate('/qrcode')
    }, [filterActived])

    return (
      <S.container>

        <Header lateCount={lateCount} clickNotification={Notification}/>

        <S.FilterArea>
          <button type='button' onClick={()=> setfilterActived("all")}>
            <FilterCard title="Todos" 
            actived={filterActived == 'all'}/>
          </button>
          <button type='button' onClick={()=> setfilterActived("today")}>
            <FilterCard title="Hoje" 
            actived={filterActived == 'today'}/>
          </button>
          <button type='button' onClick={()=> setfilterActived("week")}>
            <FilterCard title="Semana" 
            actived={filterActived == 'week'} />
          </button>
          <button type='button' onClick={()=> setfilterActived("month")}>
            <FilterCard title="Mês" 
            actived={filterActived == 'month'} />
          </button>
          <button type='button'  onClick={()=> setfilterActived("year")}>
            <FilterCard title="Ano" 
            actived={filterActived == 'year'}/>
          </button>
        </S.FilterArea>

       <S.Title>
        <h1>{filterActived == 'late' ? 'Tarefas Atrasadas' : 'Tarefas'}</h1>
       </S.Title>
        
        <S.Content>
         {
          Tasks.map(t => (  
            <Link to={`/task/${t._id}`}>
              <TaskCard key={t._id} type={t.type} title={t.title} when={t.when} done={t.done} />
            </Link> 
          ))
         }
         
        </S.Content>
        
        <Footer/>
      
      </S.container>
    )
  }
  
  export default App