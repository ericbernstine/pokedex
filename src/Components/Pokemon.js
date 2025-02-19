import '../App.css';
import PokeType from './PokeType';
import TypeCompStrong from './TypeCompStrong';
import TypeCompWeak from './TypeCompWeak';
import {useState} from 'react';
import { useRef } from "react";


const Pokemon = ({ name, img, type, num, weight, height, hp, attack, defense, sAttack, sDefense, speed }) => {
    const [showContent, setShowContent] = useState(false);

    const weakRef = useRef(null)

    const dropContent = () =>{
        if (showContent == false){
            weakRef.current.style.maxHeight = weakRef.current.scrollHeight + 'px'
            setShowContent(true)
        } else {
            weakRef.current.style.maxHeight = 0
            setShowContent(false)
        }
    }

    return (
        <div className='pokeContainer flex justify-center gap-3 w-9/12 sm:w-3/4 rounded-sm'>
            <div className='imageType'>
                <img src={img}></img>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <p>Type: <PokeType typeArr={type}/> </p>
                <p>Num: #{num}</p>
            </div>
            <div className='stats'>
                <p>Weight: {weight}</p>
                <p>Height: {height}</p>
                <p>HP: {hp}</p>
                <p>Atk: {attack}</p>
                <p>Def: {defense}</p>
                <p>Sp. Atk: {sAttack}</p>
                <p>Sp. Def: {sDefense}</p>
                <p>Speed: {speed}</p>
                    <div className='weakTitle' onClick={dropContent}>
                        <h3>Avoid these types: </h3>
                    </div>

                <div ref={weakRef} className='weakContent'>
                        <TypeCompWeak typeArr={type}/>
                </div>

                    <h3 className='text-xl font-semibold'>Strong against: <TypeCompStrong typeArr={type}/> </h3>
                

             </div>
        </div>

    )
}

export default Pokemon