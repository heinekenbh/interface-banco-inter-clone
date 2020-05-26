import React from 'react'
import { View } from 'react-native'

import { 
    ISafeContainer,
    ISafeButton,
    Img,
    Icon,
    IconText
} from './styles'

export default function ISafe() {

    return (
        <ISafeContainer>
            <ISafeButton>
                <Img
                    source={ require('../../../../assets/iSafe.png') }
                    resizeMode='cover'
                />
                <View>
                    <Icon name='more-horizontal' size={ 20 } color='#DB772C' />
                    <IconText>Gerar</IconText>
                </View>
            </ISafeButton>
        </ISafeContainer>
    )
}