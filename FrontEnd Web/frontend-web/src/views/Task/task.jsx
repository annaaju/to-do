import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as S from './styles.jsx'
import {format, parse} from 'date-fns'

import api from '../../services/api.js'

//COMPONENTES:
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import TypeIcons from '../../utils/typeicons.jsx'
import isConnected from '../../utils/isConnected.jsx'


function Task({ match }) {

    const navigate = useNavigate()
  
    const [lateCount, setLateCount] = useState()
    const [done, setDone] = useState(false)
    // const [id, setId] = useState()
    const [type, setType] = useState(1)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
    const [hour, setHour] = useState(format(new Date(), 'HH:mm'))
    

    const reset = () => {
        setType(1)
        setTitle('')
        setDescription('')
        setDate(format(new Date(), 'yyyy-mm-dd'))
        setHour(format(new Date(), 'HH:mm'))
        setMacadress('11:11:11:11:11')
     }
    

    const { id } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(!isConnected){
            navigate('/qrcode')
        }
        
        if (id) {
           LoadTaskDetails()
        }
       }, [id])

    async function lateVerify(){
      await api.get(`/task/filter/late/${isConnected}`)
      .then(response =>{
          setLateCount(response.data.length)
      })
    }
  
    async function LoadTaskDetails(){
        await api.get(`/task/${id}`)
        .then(response=>{
            console.log(response.data);
            setType(response.data.type)
            setTitle(response.data.title)
            setDescription(response.data.description)
            
            let dateTime = parse(response.data.when, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'', new Date());
            dateTime = new Date(dateTime.valueOf() - dateTime.getTimezoneOffset() * 60000); // Convertendo para UTC
            setDate(format(dateTime, 'yyyy-MM-dd'));
            setHour(format(dateTime, 'HH:mm'));
            setDone(response.data.done)
            console.log('Status da tarefa:', done)
            
            setLoading(false)
        })
        .catch(error => {
            console.error(error); 
        });
    }
    
    async function Save(event) {

        //validação de dados
        if(!title)
            return alert("Você precisa informar o título da tarefa")
        else if(!description)
            return alert("Você precisa informar a descrição da tarefa")
        else if(!date)
            return alert("Você precisa informar a data da tarefa")
        else if(!hour)
            return alert("Você precisa informar a hora da tarefa")
        else if(!type)
            return alert("Você precisa informar o tipo da tarefa")
            
        try {
            if (id) {
                // Atualização da tarefa existente
                await api.put(`/task/${id}`, {
                    macaddress: isConnected,
                    type,
                    title,
                    description,
                    when: `${date}T${hour}:00.000`,
                    done: done
                });
    
            } else {
                // Criação de uma nova tarefa
                await api.post('/task', {
                    macaddress: isConnected,
                    type,
                    title,
                    description,
                    when: `${date}T${hour}:00.000`,
                    done: done
                });
            }
            
            navigate('/')
            
        } catch (error) {
            console.error('Erro ao salvar/criar tarefa:', error)
        }
    }

    async function remove(){
        const res = window.confirm('Deseja remover essa tarefa?')
        if(res == true)
            api.delete(`/task/${id}`)
            .then((navigate('/')))
    }
    
    
    useEffect(()=> {
        lateVerify()
    }, [])
    
    return (
      <S.container>
        
        <Header lateCount={lateCount} reset={reset} />

        <S.Form>
            
        <S.TypeIcons>
             {TypeIcons.map((icon, index) => (
             index > 0 && (
                <button key={index} onClick={() => setType(index)}>
                    <img
                        src={icon}
                        alt='Tipo da Tarefa'
                        className={type && type !== index ? 'inative' : ''}
                    />
                </button>
             )
             ))}
        </S.TypeIcons>

                <S.Input>
                    <span>Título da Tarefa</span>
                    <input
                        type='text'
                        id='title' 
                        name='title'  
                        placeholder='Dê um título para sua nova tarefa...'
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                    />
                </S.Input>

                <S.TextArea>
                    <span>Descrição</span>
                <textarea rows={5} placeholder='Descreva sua tarefa ...'
                 onChange={e => setDescription(e.target.value)} value={description}/>
                </S.TextArea>

                <S.Input>
                    <span>Data</span>
                    <input
                        type='date'
                        name='dateField'  
                        onChange={e => setDate(e.target.value)}
                        value={date}
                    />
                </S.Input>

                <S.Input>
                    <span>Hora</span>
                    <input
                        type='time'
                        id='hourField' 
                        onChange={e => setHour(e.target.value)}
                        value={hour}
                    />
                </S.Input>

                <S.Options>
                    <div>
                        <input type='checkbox'
                        key={Math.random()}
                        checked={done} 
                        onChange={() => setDone(!done)}></input>
                        <span>TAREFA CONCLUÍDA</span>
                    </div>
                   {id && <button type='button' onClick={remove} >EXCLUIR TAREFA</button>}
                </S.Options>

                <S.Save>
                    <button onClick={Save} id='salvar' type='submit'>SALVAR</button>
                </S.Save>

        </S.Form>
        
        <Footer/>
      
      </S.container>
    )
  }
  
  export default Task