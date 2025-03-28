import TypeCheckBox from './Components/TypeCheckBox';
import Pokemon from './Components/Pokemon';
import HelpBox from './Components/HelpBox';
import pokedex from './pokedex.json';
import './App.css';


function App() {
  return (
    <div>
    
      <HelpBox></HelpBox>
      <header>
        <h1 className='text-3xl font-bold'>Pokedex App</h1>
      </header>

      <div className='pokemonForm w-3/4 sm:w-1/2'>
        <div className="search container flex justify-evenly items-center w-full">
          <svg className="text-slate-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
          <input type="text" placeholder="Search" className="w-48 md:w-52 lg:w-80" />
        </div>


        <div className='flex justify-center flex-wrap gap-3 w-3/4 sm:w-1/2 mt-4 ml-auto mr-auto'>
          <TypeCheckBox type='Fire' />
          <TypeCheckBox type='Water' />
          <TypeCheckBox type='Grass' />
          <TypeCheckBox type='Electric' />
          <TypeCheckBox type='Psychic' />
          <TypeCheckBox type='Ice' />
          <TypeCheckBox type='Dragon' />
          <TypeCheckBox type='Dark' />
          <TypeCheckBox type='Fairy' />
          <TypeCheckBox type='Normal' />
          <TypeCheckBox type='Fighting' />
          <TypeCheckBox type='Flying' />
          <TypeCheckBox type='Poison' />
          <TypeCheckBox type='Ground' />
          <TypeCheckBox type='Rock' />
          <TypeCheckBox type='Bug' />
          <TypeCheckBox type='Ghost' />
          <TypeCheckBox type='Steel' />
        </div>

      </div>
      {pokedex.map((pokemon) => {
        console.log(`${pokemon.id} hp = ${pokemon.base.HP}`)
        return (
          <Pokemon
            name={pokemon.name.english}
            img={pokemon.image.hires || pokemon.image.thumbnail}
            type={pokemon.type}
            num={pokemon.id}
            weight={pokemon.profile.weight}
            height={pokemon.profile.height}
            hp={pokemon.base.HP}
            attack={pokemon.base.Attack}
            defense={pokemon.base.Defense}
            sAttack={pokemon.base['Sp. Attack']}
            sDefense={pokemon.base['Sp. Defense']}
            speed={pokemon.base.Speed}
          />
        )
      })}

    </div>
  );
}

export default App;
