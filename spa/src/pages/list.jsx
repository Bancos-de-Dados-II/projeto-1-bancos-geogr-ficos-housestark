import { Map } from "../components/map"
import { Button } from "../components/button"
import { NavLink } from "react-router"
import { useState, useEffect } from "react"
import { FarmCard } from "../components/farmer-card"
import { Modal } from "../components/modal"
import { getFarmer } from "../utils/get-farmer"

export function List() {
  const [farmerList, setFarmerList] = useState([]);
  const [position, setPosition] = useState([-6.890048, -38.555859]);
  const [selectedFarmer, setSelectedFarmer] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 


  async function getAllFarmersFunction() {
    const data = await getFarmer();
    console.log(data);
    if(data) {
      setFarmerList(data);
    }
  }

  useEffect(() => {
    getAllFarmersFunction();
  }, []);

  function handleChangePosition(newPosition){
      setPosition(newPosition);
  }
  function handleCardClick(farmer) {
    setSelectedFarmer(farmer);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedFarmer(null);
  }

  function sendPosition(){
    return position;
  }

  return (
    <div className="bg-slate-300 h-screen p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
    <main className="bg-slate-50 p-4 sm:p-8 rounded-xl">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">Family Farming</h1>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-md sm:text-lg font-medium text-slate-700">Agricultores</h1>
        <NavLink to="/">
          <Button>Voltar</Button>
        </NavLink>
      </div>
      <div className="flex flex-col gap-4 mb-4 h-[50vh] overflow-y-scroll">
          {farmerList.length > 0 ? farmerList.map((farmer) => (
            <div key={farmer.email} onClick={() => handleCardClick(farmer)}>
              <FarmCard
              key={farmer.email}
              nome={farmer.nome}
              telefone={farmer.telefone}
              email={farmer.email}
              tamanhoTerreno={farmer.tamanhoTerreno}
              position={[farmer.posicaoXTerreno, farmer.posicaoYTerreno]}
              mudarPosicao={handleChangePosition}
            />
            </div>
          )) : <p>Nenhuma fazenda cadastrada.</p>}
        </div>
      </main>
      <div className="min-h-[50vh] rounded-xl">
        <Map position={position} setPosition={setPosition} />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        farmer={selectedFarmer}
        atualizarCards={getAllFarmersFunction}
        getPosition={sendPosition}
      />
    </div>
  );
}