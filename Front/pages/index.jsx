import Titulo from '@/components/Titulo'
import Headerb from '../components/Headerb'
import Carrossel from '../components/Carrossel'

export default function Home() {
  return (
    <>
      <Headerb />
      <Titulo texto="Bem vindo(a) à papelaria Rabisco!"/>
      <Carrossel />
    </>
  )
}