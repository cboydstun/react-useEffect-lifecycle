import React from 'react'

import DemoEffects from './components/DemoEffects'
import EffectsNoDependency from './components/EffectsNoDependency'
import EffectsTwoStates from './components/EffectsTwoStates'

import './styles.css'

export default function App() {
    return (
        <body>
            {/* <DemoEffects /> */}
            {/* <EffectsNoDependency /> */}
            <EffectsTwoStates />
        </body>
    )
}
