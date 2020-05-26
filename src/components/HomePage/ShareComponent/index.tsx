import React from 'react'

import { 
    ShareContainer,
    ShareTitle,
    ShareSubTitle,
    Gradient,
    ButtonShare,
    Img,
    ButtonDescription
} from './styles'

export default function Share() {

    return (
        <ShareContainer>
            <ShareTitle>Convide seus amigos</ShareTitle>
            <ShareSubTitle>{ `Indique a Conta Digital e\nchame todo mundo pra\nficar livre das tarifas!` }</ShareSubTitle>
            <Gradient
                start={ {x: 0, y: 0} } 
                end={ {x: 1, y: 0} }
                colors={ ['#EC682E', '#EE7F31'] }
            >
                <ButtonShare>
                    <ButtonDescription>CONVIDAR</ButtonDescription>
                </ButtonShare>
            </Gradient>
            <Img source={ require('../../../../assets/convideSeusAmigos.png') } />
        </ShareContainer>
    )
}