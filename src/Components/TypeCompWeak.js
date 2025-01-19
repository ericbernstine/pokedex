import types from '../types.json'
import PokeType from './PokeType';

const TypeCompWeak = ({typeArr}) => {
    let result = [];
    let finalOutput = [];
    const findStats = (target) => {
      let current = types[target]
      for (let prop in current){
          if (current[prop] == 0.5){
              result.push(prop)
            }
          }
    }
    typeArr.map((type) => {
      findStats(type);
    })
    result.map((item) => {
        if (!finalOutput.includes(item) && !typeArr.includes(item)) {
            finalOutput.push(item);
        }
    });
    
    return <PokeType typeArr={finalOutput} styles={'compImg'}/>
  };

  export default TypeCompWeak