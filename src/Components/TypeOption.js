const TypeOption = ({ type }) => {
    return (
        <div>
            <input type='checkbox' name={type} className=''>
            </input>
            <label className='font-sans ...' htmlFor={type}>{type}</label>
        </div>
    )
}

export default TypeOption