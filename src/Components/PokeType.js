import water from '../Images/Types/water.png'
import fire from '../Images/Types/fire.png'
import grass from '../Images/Types/grass.png'
import bug from '../Images/Types/bug.png'
import dark from '../Images/Types/dark.png'
import dragon from '../Images/Types/dragon.png'
import electric from '../Images/Types/electric.png'
import fairy from '../Images/Types/fairy.png'
import fighting from '../Images/Types/fighting.png'
import flying from '../Images/Types/flying.png'
import ghost from '../Images/Types/ghost.png'
import ground from '../Images/Types/ground.png'
import ice from '../Images/Types/ice.png'
import normal from '../Images/Types/normal.png'
import poison from '../Images/Types/poison.png'
import psychic from '../Images/Types/psychic.png'
import rock from '../Images/Types/rock.png'
import steel from '../Images/Types/steel.png'
import '../App.css';



const PokeType = ({ typeArr, styles, divStyles }) => {
    return (
        <div className={divStyles || ''}>
            {typeArr.map((type) => {
                return <img className={styles || ''} key={type} src={getImgUrl(type)} alt={type}/>;
            })}
        </div>
    );
};

const getImgUrl = (type) => {
    switch (type) {
        case 'Grass':
            return grass;
        case 'Water':
            return water;
        case 'Fire':
            return fire;
        case 'Bug':
            return bug;
        case 'Dark':
            return dark;
        case 'Dragon':
            return dragon
        case 'Electric':
            return electric
        case 'Fairy':
            return fairy
        case 'Fighting':
            return fighting;
        case 'Flying':
            return flying; 
        case 'Ghost':
            return ghost;
        case 'Ground':
            return ground;
        case 'Ice':
            return ice;
        case 'Normal':
            return normal;
        case 'Poison':
            return poison;
        case 'Psychic':
            return psychic;
        case 'Rock':
            return rock;
        case 'Steel':
            return steel;
        default:
            return;
    }
}

export default PokeType