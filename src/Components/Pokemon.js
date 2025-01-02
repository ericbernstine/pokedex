import '../App.css';
import types from './types.png'

const Pokemon = () => {
    return (
        <div className='pokeContainer flex justify-center gap-3 w-3/4 sm:w-1/2 rounded-sm'>
            <div className='imageType'>
                <img src='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/320.png'></img>
                <h1 className='text-2xl font-bold'>Wailmer</h1>
                <p>Type: <img src={types}/> </p>
                <p>Num: #0320</p>
            </div>
             
             <div className='stats'>
                <p>Weight: 286.6lbs</p>
                <p>Height: 0.9m</p>
                <p>HP: </p>
                <p>Atk: </p>
                <p>Def: </p>
                <p>Sp. Atk: </p>
                <p>Sp. Def: </p>
                <p>Speed: </p>
                <h3 className='text-xl font-semibold'>Weak to:</h3>
                <h3 className='text-xl font-semibold'>Strong against:</h3>
             </div>
        </div>
    )
}

export default Pokemon