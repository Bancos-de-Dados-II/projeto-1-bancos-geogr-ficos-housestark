import { Input } from '../components/input'
import { Button } from '../components/button'
import { Map } from '../components/map'

export function Home() {
  return (
    <div className='bg-slate-300 h-screen p-4 grid grid-cols-2'>
      <main className='bg-slate-50 p-4 mr-4 rounded-xl'>
        <div className='flex justify-between'>
          <h1 className='text-2xl font-bold'>Family Farming</h1>
          <Button>Lista</Button>
        </div>
        <div className='flex flex-col gap-4'>
          <Input placeholder="Digite o nome" />
          <Input placeholder="Digite o nome" />
          <Input placeholder="Digite o nome" />
          <Input placeholder="Digite o nome" />
          <Input placeholder="Digite o nome" />
        </div>
        <Button>Salvar</Button>
        <p></p>
      </main>
      <div className="min-h-[50vh] rounded-xl">
        <Map/>
      </div>
    </div>
  )
}
