import { useState } from 'react'




export function FarmCard({ nome, email, telefone, tamanhoTerreno}) {

  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  
  return (
    <>
      <div onClick={open} className="w-full relative cursor-pointer vehicle-card">

        <div className="p-4 w-full bottom-0 text-black">
          <div className='flex justify-between p-2 rounded border border-primary'>
            <div>
              <p><strong>Nome: </strong>{nome}</p>
              <p><strong>Telefone: </strong>{telefone}</p>
              <p><strong>Email: </strong>{email}</p>
            </div>
            
            <p><strong>Tamanho do terreno: </strong>{tamanhoTerreno} m²</p>
          </div>
        </div>
      </div>


    </>
  );
}

