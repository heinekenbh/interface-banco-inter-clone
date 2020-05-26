import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { 
    ButtonContainer 
} from './styles'

interface IButtonToggleMenu {
    showMenu: Boolean
    onPress(): void
}

export default function ButtonToggleMenu({
    showMenu,
    onPress
}: IButtonToggleMenu) {

    return (
        <TouchableWithoutFeedback onPress={ () => onPress() }>
            <ButtonContainer>
                <Ionicons name={ `ios-arrow-${ (showMenu ? 'up' : 'down') }` } size={ 20 } color='#DB772C' />
            </ButtonContainer>
        </TouchableWithoutFeedback>
    )
}