import { Map } from "../components/map"
import { Button } from "../components/button"
import { NavLink } from "react-router"
import { useState, useEffect } from "react"
import { FarmCard } from "../components/farmer-card"

export function List() {
  const [farmerList, setFarmerList] = useState([]);
  const [position, setPosition] = useState([51.505, -0.09])

  useEffect(() => {
    setFarmerList([
      {
        nome: "andré",
        telefone: "111111",
        email: "g@gmail.com",
        tamanhoTerreno: "1111111"
      }
    ]);
  }, []);

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
          {farmerList ? farmerList.map((index) => (
            <FarmCard
              key={index.email}
              nome={index.nome}
              telefone={index.telefone}
              email={index.email}
              tamanhoTerreno={index.tamanhoTerreno}
            />

          )) : <p>Nenhuma fazenda cadastrada.</p>}
        </div>
      </main>
      <div className="min-h-[50vh] rounded-xl">
        <Map position={position} setPosition={setPosition} />
      </div>
    </div>
  )
}
