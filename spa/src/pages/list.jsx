import { Map } from "../components/map"
import { Button } from "../components/button"
import { NavLink } from "react-router"


export function List() {
  return (
    <div className='bg-slate-300 h-screen p-8 grid grid-cols-2 gap-8'>
      <main className='bg-slate-50 p-8 rounded-xl'>
        <h1 className='text-2xl font-bold mb-4'>Family Farming</h1>
        <div className='flex justify-between items-center mb-4 mt-4'>
          <h1 className='text-lg font-medium text-slate-700'>Agricultores</h1>
          <NavLink to="/">
            <Button>Voltar</Button> 
          </NavLink>
        </div>
        <div className='flex flex-col gap-4 mb-4'>
          <p>john</p>
          <p>mary</p>
          <p>jane</p>
        </div>
      </main>
      <div className="min-h-[50vh] rounded-xl">
        <Map />
      </div>
    </div>
  )
}
