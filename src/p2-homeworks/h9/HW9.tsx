import React from 'react'
import homeworks from '../h1/homeworks'
import Clock from './Clock'


function HW9() {
    return (
        
        <div>
            <hr />
            {homeworks(9)}
            <div style={{ marginLeft: '14px' }}>
                {/*should work (должно работать)*/}
                <Clock />

                <hr />
                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeClock/>*/}
                <hr />
            </div>
        </div>
    )
}

export default HW9
