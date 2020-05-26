import React from 'react'

import { 
    Gradient,
    Img
} from './styles'

export default function Header() {

    return (
        <Gradient
            start={{ x: 0, y: 0 }} 
            end={{ x: 1, y: 0 }}
            colors={[ '#EC682E', '#EE7F31' ]}
        >
            <Img source={ require('../../../../assets/logo.png') } />
        </Gradient>
    )
}