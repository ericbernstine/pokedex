import '../App.css';
import PokeType from './PokeType';
import TypeCompStrong from './TypeCompStrong';
import TypeCompWeak from './TypeCompWeak';

const Pokemon = ({ name, img, type, num, weight, height, hp, attack, defense, sAttack, sDefense, speed }) => {
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
                <h3 className='text-l font-semibold'>Weak to/ Not Effective Against: <TypeCompWeak typeArr={type}/> </h3>
                <h3 className='text-xl font-semibold'>Strong against: <TypeCompStrong typeArr={type}/> </h3>
             </div>
        </div>

    )
}

export default Pokemon