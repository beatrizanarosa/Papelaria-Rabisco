import Titulo from '@/components/Titulo'
import Headerb from '../components/Headerb'
import Carrossel from '../components/Carrossel'

export default function Home() {
  return (
    <>
      <Headerb />
      <Carrossel />
      <Titulo texto="Bem vindo à papelaria Rabisco!"/>   
    </>
  )
}