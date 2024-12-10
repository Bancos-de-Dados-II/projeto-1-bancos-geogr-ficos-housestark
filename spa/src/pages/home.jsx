import { Input } from '../components/input'
import { Button } from '../components/button'
import { Map } from '../components/map'
import { NavLink } from 'react-router'

export function Home() {
  return (
    <div className='bg-slate-300 h-screen p-8 grid grid-cols-2 gap-8'>
      <main className='bg-slate-50 p-8 rounded-xl'>
        <h1 className='text-2xl font-bold mb-4'>Family Farming</h1>
        <div className='flex justify-between items-center mb-4 mt-4'>
          <h1 className='text-lg font-medium text-slate-700'>Criar agricultor</h1>
          <NavLink to="/agricultores">
            <Button>Lista</Button>
          </NavLink>
        </div>
        <div className='flex flex-col gap-4 mb-4'>
          <Input placeholder="Digite o nome" />
          <Input placeholder="Digite o email" />
          <Input placeholder="Digite o telefone" />
          <Input placeholder="Digite o tamanho do terreno" />
        </div>
        <Button>Salvar</Button>
      </main>
      <div className="flex flex-col  rounded-xl bg-slate-50">
        <div className='flex justify-between items-center gap-2 px-4 py-4'>
          <Input placeholder="Procure pelo mapa" />
          <Button>Buscar</Button>
        </div>
        <div className='flex-grow'>
          <Map />
        </div>
      </div>
    </div>
  )
}
