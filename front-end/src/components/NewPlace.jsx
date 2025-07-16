import { useState } from "react";
import Perks from './Perks.jsx'

function NewPlace() {
    const [title, setTitle] = useState("");
    const [city, setCity] = useState("");
    const [photos, setPhotos] = useState("");
    const [description, setDescription] = useState("");
    const [extras, setExtras] = useState("");
    const [price, setPrice] = useState("");
    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");
    const [guests, setGuests] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="w-full px-8 flex flex-col gap-6">
            <div className="title flex flex-col gap-1">
                <h2 className="ml-2 font-bold text-2xl">Titulo</h2>
                <input type="text" placeholder="Digite o título do seu anúncio" className="rounded-full border border-gray-300 px-4 py-2"
                value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="address flex flex-col gap-1">
                <h2 className="ml-2 font-bold text-2xl">Endereço</h2>
                <input type="text" placeholder="Digite a cidade e país do seu anúncio" className="rounded-full border border-gray-300 px-4 py-2"
                value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div className="photos flex flex-col gap-1">
                <h2 className="ml-2 font-bold text-2xl">Fotos</h2>
                <div className="flex gap-3">
                    <input type="text" placeholder="Insira o link de uma foto" className="rounded-full border border-gray-300 px-4 py-2 grow"
                    value={photos} onChange={(e) => setPhotos(e.target.value)}/>
                    <button className="hover:bg-gray-400 transition rounded-full border border-gray-300 bg-gray-300 px-4 py-2 cursor-pointer">Enviar foto</button>
                </div>
                <div className="grid grid-cols-5 gap-4 mt-2">
                <label htmlFor="file" className="flex gap-2 rounded-2xl border items-center justify-center border-gray-300 aspect-square cursor-pointer">
                    <input type="file" id="file" className="hidden"/> <i class="fa-solid fa-arrow-up-from-bracket"></i> Upload
                </label>
                </div>
            </div>
            <div className="description flex flex-col gap-1">
                <h2 className="ml-2 font-bold text-2xl">Descrição</h2>
                <textarea type="textarea" placeholder="Digite a descrição do seu anúncio" className="rounded-2xl border border-gray-300 px-4 py-2 h-56 resize-none"
                value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="perks flex flex-col gap-1">
                <h2 className="ml-2 font-bold text-2xl">Comodidades</h2>
                <Perks/>
            </div>
            <div className="description flex flex-col gap-1">
                <h2 className="ml-2 font-bold text-2xl">Informações Extras</h2>
                <textarea type="textarea" placeholder="Digite as informações extras do seu anúncio" className="rounded-2xl border border-gray-300 px-4 py-2 h-56 resize-none"
                value={extras} onChange={(e) => setExtras(e.target.value)} />
            </div>
            <div className="description flex flex-col gap-1">
                <h2 className="ml-2 font-bold text-2xl">Restrições e Preço</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-6">
                    <div className="flex flex-col gap-2">
                        <h2 className="ml-2 font-bold text-xl">Preço</h2>
                        <input type="number" placeholder="R$300" className="rounded-full border border-gray-300 px-4 py-2"
                        value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="ml-2 font-bold text-xl">Check-in</h2>
                        <input type="text" placeholder="12:00" className="rounded-full border border-gray-300 px-4 py-2"
                        value={checkin} onChange={(e) => setCheckin(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="ml-2 font-bold text-xl">Cehck-out</h2>
                        <input type="text" placeholder="12:00" className="rounded-full border border-gray-300 px-4 py-2"
                        value={checkout} onChange={(e) => setCheckout(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="ml-2 font-bold text-xl">N° Hóspedes</h2>
                        <input type="number" placeholder="N° Hóspedes" className="rounded-full border border-gray-300 px-4 py-2"
                        value={guests} onChange={(e) => setGuests(e.target.value)} />
                    </div>
                </div>
            </div>
                <button className="bg-primary-400 min-w-44 cursor-pointer rounded-full px-4 py-2 text-white transition hover:bg-primary-500 items-center flex flex-col">Adicionar</button>
        </form>
    )
}

export default NewPlace;