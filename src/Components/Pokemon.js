import '../App.css';
import PokeType from './PokeType';
import TypeCompStrong from './TypeCompStrong';
import TypeCompWeak from './TypeCompWeak';
import upArw from '../Images/upArw.png'
import '../index.css'
import {useState} from 'react';
import { useRef } from "react";


const Pokemon = ({ name, img, type, num, weight, height, hp, attack, defense, sAttack, sDefense, speed }) => {
    const [showContent, setShowContent] = useState(false);
    const [showContent2, setShowContent2] = useState(false);

    const weakRef = useRef(null)
    const strongRef = useRef(null)
    const weakArw = useRef(null)
    const strongArw = useRef(null)

    const dropContent = (ref) =>{
        switch (ref) {
            case 'weak':
                if (showContent === false){
                    weakRef.current.style.maxHeight = weakRef.current.scrollHeight + 'px'
                    weakArw.current.classList.remove('flipBack')
                    weakArw.current.classList.add('flip')
                    setShowContent(true)
                } else {
                    weakRef.current.style.maxHeight = 0
                    weakArw.current.classList.remove('flip')
                    weakArw.current.classList.add('flipBack')
                    setShowContent(false)
                }
            break;
            case 'strong':
                if (showContent2 === false){
                    strongRef.current.style.maxHeight = strongRef.current.scrollHeight + 'px'
                    strongArw.current.classList.remove('flipBack')
                    strongArw.current.classList.add('flip')
                    setShowContent2(true)
                } else {
                    strongRef.current.style.maxHeight = 0
                    strongArw.current.classList.remove('flip')
                    strongArw.current.classList.add('flipBack')
                    setShowContent2(false)
                }    
        }
    }

    return (
        <div className='pokeContainer flex justify-center gap-3 w-9/12 sm:w-3/4 rounded-sm'>
            <div className='imageType'>
                <img src={img}
                    alt='Pokemon'
                />
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

                    {/* AVOID DROP DOWN */}
                    <div className='weakTitle' onClick={() => dropContent('weak')}>
                        <h3>Avoid these types </h3>
                        <img ref={weakArw} src={upArw}/>
                    </div>
                    <div ref={weakRef} className='weakContent'>
                        <TypeCompWeak typeArr={type}/>
                    </div>

                    {/* ATTACK DROP DOWN */}
                    <div className='strongTitle' onClick={() => dropContent('strong')}>
                         <h3>Target these types: </h3>
                         <img ref={strongArw}src={upArw}/>
                    </div>
                    <div ref={strongRef} className='strongContent'>
                        <TypeCompStrong typeArr={type}/>
                    </div>
             </div>
        </div>

    )
}

export default Pokemon