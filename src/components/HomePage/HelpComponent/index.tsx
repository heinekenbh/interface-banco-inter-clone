import React from 'react'
import { View } from 'react-native'

import { 
    ButtonHelp,
    SectionTitle,
    ButtonContainer,
    ButtonInfo,
    Img,
    ButtonTitle,
    Icon 
} from './styles'

export default function Help() {

    return (
        <ButtonHelp
            activeOpacity={ 0.9 }
            underlayColor='#DFDFDF'
            onPress={() => {}}
        >
            <>
                <SectionTitle>Central de Ajuda</SectionTitle>
                <ButtonContainer>
                    <ButtonInfo>
                        <Img source={ require('../../../../assets/centralAjuda.png') } />
                        <ButtonTitle>{ `Oi, Kaiser.\nPosso ajudar?` }</ButtonTitle>
                    </ButtonInfo>
                    <Icon name='arrow-forward' size={ 20 } color="#DB772C" />
                </ButtonContainer>
            </>
        </ButtonHelp>
    )
}