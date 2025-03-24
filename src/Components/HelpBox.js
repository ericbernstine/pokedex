
import {useState, useRef} from 'react'

const HelpBox = () => {
    const [active, setActive] =  useState(false)
    const box = useRef(null)

    const showHelp = () => {
        box.current.classList.remove('inactive')
        box.current.classList.add('active')
    }
    const hideHelp = () => {
        box.current.classList.remove('active')
        box.current.classList.add('inactive')
    }

    return (
        <div>
            <div className="inactive" ref={box}>
                <div className='text-2xl exitIcon' onClick={hideHelp}>
                    <h1>X</h1>
                </div>
                <div className='infoBox'>
                    <h1>Avoid These Types, Target these types explained:</h1>
                    <p>When selecting the <b>'avoid these types'</b> or <b>'target these types'</b> dropdown menus remember the following</p>
                    <p> - These dropdowns include any type matchup that might be favored </p>
                    <p> - For example, <b>'avoid these types'</b> will include all types that pokemon would have an unfavorable matchup too, not just weak against.</p> 
                    <p> - This includes types they are weak against, ineffective against, strong against them or have no effect </p>
                </div>
            </div>
            <div className="text-2xl helpIcon" onClick={showHelp}>
                <h1>?</h1>
            </div>
        </div>
    )
}
export default HelpBox





