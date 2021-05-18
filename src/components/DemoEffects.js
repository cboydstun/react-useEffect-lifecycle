import React, {useEffect} from 'react'

export default function DemoEffects() {
    return (
        <div>
            {
           useEffect(() => { 
             // execute side effect
             console.log('hey from effect')
            })
            }
        </div>
    )
}

