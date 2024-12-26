import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

      <header>
        <h1 className='text-3xl font-bold'>Pokedex App</h1>
      </header>

      <div className='pokemonForm'>


        <div className="search container sm:mx-auto w-40 md:w-52 lg:w-80 flex justify-evenly items-center">
          <svg className="text-slate-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
          <input type="text" placeholder="Search" className="w-48 md:w-52 lg:w-80" />
        </div>

  
        <input type='checkbox' name='fire' className=''>
        </input>
        <label className='font-sans ...' for='fire'>Fire</label>


      </div>

      <div className='container md:mx-auto'>
        <div className='pokemon'>

        </div>
      </div>

    </div>
  );
}

export default App;
