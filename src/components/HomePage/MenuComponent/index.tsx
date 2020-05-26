import React, { useState } from 'react'

import { 
    MenuContainer,
    Option,
    IconContainer,
    Img,
    OptionText,
    Gradient
} from './styles'
import ButtonToggleMenu from '../ButtonToggleMenuComponent'

export default function Menu() {

    const [ showMenu, setShowMenu ] = useState(false)

    const handleMenuVisibility = () => setShowMenu(!showMenu)

    const options = [
        { id: String(Math.random()), title: 'Transferências', icon: require('../../../../assets/transferencias.png') },
        { id: String(Math.random()), title: 'Pagamentos', icon: require('../../../../assets/pagamentos.png') },
        { id: String(Math.random()), title: 'Investimentos', icon: require('../../../../assets/investimentos.png') },
        { id: String(Math.random()), title: 'Cartões', icon: require('../../../../assets/cartoes.png') },
        { id: String(Math.random()), title: 'Gift Card', icon: require('../../../../assets/giftCard.png') },
        { id: String(Math.random()), title: 'Seguros', icon: require('../../../../assets/seguros.png') },
        { id: String(Math.random()), title: 'Interpag', icon: require('../../../../assets/interpag.png') },
        { id: String(Math.random()), title: 'Depósito por boleto', icon: require('../../../../assets/depositoPorBoleto.png') },
        { id: String(Math.random()), title: 'Depósito por cheque', icon: require('../../../../assets/depositoPorCheque.png')},
        { id: String(Math.random()), title: 'Conta MEI', icon: require('../../../../assets/contaMEI.png') },
        { id: String(Math.random()), title: 'Agendamentos', icon: require('../../../../assets/agendamentos.png') },
        { id: String(Math.random()), title: 'Portabilidade de salário', icon: require('../../../../assets/portabilidadeDeSalario.png') },
        { id: String(Math.random()), title: 'Empréstimo', icon: require('../../../../assets/emprestimo.png') },
        { id: String(Math.random()), title: 'Financiamento Imobiliário', icon: require('../../../../assets/financiamentoImobiliario.png') },
        { id: String(Math.random()), title: 'Débito Automático', icon: require('../../../../assets/debitoAutomatico.png') },
        { id: String(Math.random()), title: 'Consórcio', icon: require('../../../../assets/consorcio.png') },
        { id: String(Math.random()), title: 'Câmbio', icon: require('../../../../assets/cambio.png') },
        { id: String(Math.random()), title: 'Recarga', icon: require('../../../../assets/recarga.png') }
    ]

    return (
        <>
            <MenuContainer>
                { options.map((option, idx) => idx < 3 || showMenu ? (
                    <Option
                        key={ option.id }
                        activeOpacity={ .9 }
                        underlayColor='#DFDFDF'
                        onPress={() => {}}
                    >
                        <>
                            <IconContainer>
                                <Img source={ option.icon } />
                            </IconContainer>
                            <OptionText>{ option.title }</OptionText>
                        </>
                    </Option>
                ) : null) }
            </MenuContainer>
            <Gradient
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                colors={[ '#FFF', 'transparent' ]}
            >
                <ButtonToggleMenu 
                    showMenu={ showMenu }
                    onPress={ handleMenuVisibility }
                />
            </Gradient>
        </>
    )
}