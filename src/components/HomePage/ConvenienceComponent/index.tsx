import React from 'react'
import { View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { 
    ConvenienceContainer,
    ButtonShopping,
    Img,
    ButtonTitle,
    ButtonSubTitle,
    OptionsContainer,
    Option,
    OptionImgContainer,
    OptionImg,
    OptionText,
    Divider
} from './styles'

export default function Convenience() {

    const options = [
        { id: String(Math.random()), title: 'Casa', iconPath: require('../../../../assets/casa.png') },
        { id: String(Math.random()), title: 'Entretenimento', iconPath: require('../../../../assets/entretenimento.png') },
        { id: String(Math.random()), title: 'Tecnologia', iconPath: require('../../../../assets/tecnologia.png') },
        { id: String(Math.random()), title: 'Transporte', iconPath: require('../../../../assets/transporte.png') },
        { id: String(Math.random()), title: 'Esporte', iconPath: require('../../../../assets/esporte.png') },
        { id: String(Math.random()), title: 'Viagem', iconPath: require('../../../../assets/viagem.png') },
        { id: String(Math.random()), title: 'Saúde', iconPath: require('../../../../assets/saude.png') },
        { id: String(Math.random()), title: 'Beleza', iconPath: require('../../../../assets/beleza.png') },
        { id: String(Math.random()), title: 'Moda', iconPath: require('../../../../assets/moda.png') }
    ]

    return (
        <ConvenienceContainer>
            <ButtonShopping
                activeOpacity={ 0.9 }
                underlayColor='#DFDFDF'
                onPress={() => {}}
            >
                <>
                
                    <Img
                        source={ require('../../../../assets/carrinho.png') }
                        resizeMode='contain'
                    />
                    <View>
                        <ButtonTitle>Shopping</ButtonTitle>
                        <ButtonSubTitle>{ `Aproveite todos os produtos\ncom cashback!` }</ButtonSubTitle>
                    </View>
                    <FontAwesome5 name='arrow-right' size={ 20 } color='#DB772C' />
                </>
            </ButtonShopping>
            <OptionsContainer>
                { options.map(option => (
                    <Option
                        key={ option.id }
                        onPress={() => {}}
                    >
                        <>
                            <OptionImgContainer>
                                <OptionImg source={ option.iconPath } />
                            </OptionImgContainer>
                            <OptionText>{ option.title }</OptionText>
                        </>
                    </Option>
                )) }
            </OptionsContainer>
            <Divider />
        </ConvenienceContainer>
    )
}