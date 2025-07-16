import { useState } from "react";

function Perks() {
    const [perks, setPerks] = useState([]);

    const handleClick = (target) => {
        const newPerks = target.checked ? [...perks, target.value] : [...perks].filter((perk) => perk !== target.value);

        setPerks(newPerks)
    }

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
      <label
        htmlFor="wifi"
        className="cursor-pointer flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
      >
        <input
          type="checkbox"
          name="wifi"
          id="wifi"
          value={"wifi"}
          onChange={(e) => handleClick(e.target)}
        />
        <i class="fa-solid fa-wifi"></i> Wifi
      </label>

      <label
        htmlFor="parking"
        className="cursor-pointer flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
      >
        <input
          type="checkbox"
          name="parking"
          id="parking"
          value={"parking"}
          onChange={(e) => handleClick(e.target)}
        />
        <i class="fa-solid fa-car"></i> Estacionamento Grátis
      </label>

      <label
        htmlFor="tv"
        className="cursor-pointer flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
      >
        <input
          type="checkbox"
          name="tv"
          id="tv"
          value={"tv"}
          onChange={(e) => handleClick(e.target)}
        />
        <i class="fa-solid fa-tv"></i> TV
      </label>

      <label
        htmlFor="grill"
        className="cursor-pointer flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
      >
        <input
          type="checkbox"
          name="grill"
          id="grill"
          value={"grill"}
          onChange={(e) => handleClick(e.target)}
        />
        <i class="fa-solid fa-fire-burner"></i> Churrasqueira
      </label>
      <label
        htmlFor="pets"
        className="cursor-pointer flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
      >
        <input
          type="checkbox"
          name="pets"
          id="pets"
          value={"pets"}
          onChange={(e) => handleClick(e.target)}
        />
        <i class="fa-solid fa-paw"></i> Pets
      </label>

      <label
        htmlFor="entrance"
        className="cursor-pointer flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
      >
        <input
          type="checkbox"
          name="entrance"
          id="entrance"
          value={"entrance"}
          onChange={(e) => handleClick(e.target)}
        />
        <i class="fa-solid fa-shield"></i> Entrada Privada
      </label>

    </div>
  );
}

export default Perks;
