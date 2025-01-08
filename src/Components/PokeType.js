import water from '../Images/Types/water.png'
import fire from '../Images/Types/fire.png'
import grass from '../Images/Types/grass.png'


const PokeType = (typeArr) => {
    return (
        <div>
            {typeArr.map((type) => {
                <img src={water}></img>
            })}
        </div>
    )
}

const getImgUrl = (type) =>{
    switch (type){

    }
}

export default PokeType