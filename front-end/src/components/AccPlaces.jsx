import { Link, useParams } from "react-router-dom";
import NewPlace from "./NewPlace.jsx";

function AccPlaces() {
    const { action } = useParams();

  return (
    <div className="max-w-7xl w-full items-center flex flex-col">

        {action !== "new" ? 
        (<Link to="/account/places/new" className="mt-2 flex justify-center items-center gap-2 text-center bg-primary-400 min-w-44 cursor-pointer rounded-full px-4 py-2 text-white transition hover:bg-primary-500">
        Adicionar
        </Link>) : (<NewPlace></NewPlace>)}

    </div>
  );
}

export default AccPlaces;
