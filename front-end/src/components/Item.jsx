import React from "react";

function Item() {
  return (
    <a href="https://projeto-booking.onrender.com/" className="flex flex-col gap-2 text-gray-600">
    <img src="https://projeto-booking.onrender.com/uploads/a90731aa-9a50-413d-bb4f-40cc4e869366-1741466753784.jpg" alt="Imagem da acomodação" className="aspect-square object-cover rounded-2xl"/>
    <div>
        <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate">Cobertura, duplex, em frente a praia das Dunas, Cabo Frio. As três suítes com ar condicionado. TV na suíte master e sala, com sky na sala. Cozinha equipada. Wi-fi de 120mbs da Vivo Fibra. Piscina e churrasqueira privativas. Estacionamento para dois carros dentro do prédio. Com uma área externa com vista panorâmica da praia das Dunas. O espaço Cobertura duplex em frente a praia das Dunas, em Cabo Frio. O apartamento conta com três suítes e mais um banheiro social, piscina e churrasqueira privativas, com uma área externa com vista panorâmica da praia das Dunas. Bairro calmo. Na rua lateral você encontra uma padaria que oferece café da manhã e alguns restaurantes. 3-5min da Praia do Forte (indo de carro). Cobertura fica no 4º andar.</p>
        <p><span className="font-semibold">R$550</span> por noite</p>
    </div>
    </a>
  );
}

export default Item;