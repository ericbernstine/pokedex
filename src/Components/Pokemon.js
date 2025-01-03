import '../App.css';
import water from '../Images/water.png'

const Pokemon = ({ name, img, type, num, weight, height, hp, attack, defense, sAttack, sDefense, speed }) => {
    return (
        <div className='pokeContainer flex justify-center gap-3 w-3/4 sm:w-1/2 rounded-sm'>
            <div className='imageType'>
                <img src={img}></img>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <p>Type: <img src={water} /> </p>
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
                <h3 className='text-xl font-semibold'>Weak to:</h3>
                <h3 className='text-xl font-semibold'>Strong against:</h3>
             </div>
        </div>



        // <div className='pokeContainer flex justify-center gap-3 w-3/4 sm:w-1/2 rounded-sm'>
        //     <div className='imageType'>
        //         <img src='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/320.png'></img>
        //         <h1 className='text-2xl font-bold'>Wailmer</h1>
        //         <p>Type: <img src={water}/> </p>
        //         <p>Num: #0320</p>
        //     </div>

        //      <div className='stats'>
        //         <p>Weight: 286.6lbs</p>
        //         <p>Height: 0.9m</p>
        //         <p>HP: </p>
        //         <p>Atk: </p>
        //         <p>Def: </p>
        //         <p>Sp. Atk: </p>
        //         <p>Sp. Def: </p>
        //         <p>Speed: </p>
        //         <h3 className='text-xl font-semibold'>Weak to:</h3>
        //         <h3 className='text-xl font-semibold'>Strong against:</h3>
        //      </div>
        // </div>
    )
}

export default Pokemon