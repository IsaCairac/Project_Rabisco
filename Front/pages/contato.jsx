import Headerb from '../components/Headerb';
import Titulo from '../components/Titulo';
import CardListFunc from '@/components/CardListFunc'
import { useState, useEffect } from 'react';
import {getFuncionarios} from '@/services/api_request'


export default function contato(){
    const [funcionarios, setFuncionarios] = useState([])

    async function buscaFuncionarios(){
        try{
            const data = await getFuncionarios()
            setFuncionarios(data)
        } catch (error){
            console.error('Erro ao buscar funcionarios:', error)
        }
    }

    useEffect(() => {
        buscaFuncionarios()
    }, [])
    
    return(
        <>
        <Headerb/>
        <Titulo texto="Conheça nossa equipe!" />
        <CardListFunc funcionarios={funcionarios} />
        </>
    )  
}