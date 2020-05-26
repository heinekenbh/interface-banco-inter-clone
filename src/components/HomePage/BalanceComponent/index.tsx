import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

import { 
    BalanceInfo,
    BalanceTitle,
    BalanceContainer,
    BalanceSymbol,
    BalanceValue,
    BalanceAction,
    BalanceHidden,
    Button,
    BalanceUpdated
} from './styles'
import IBalance from '../../../interfaces/IBalance'

export default function Balance({
    showBalance,
    title,
    value,
    onPressShowBalance
}: IBalance) {

    return showBalance ?
        (
            <>
                <BalanceInfo>
                    <BalanceTitle>{ title }</BalanceTitle>
                    <BalanceContainer>
                        <BalanceSymbol>R$</BalanceSymbol>
                        <BalanceValue>{ 
                            value
                                .toFixed(2)
                                .toString()
                                .replace(',', '')
                                .replace('.', ',')
                        }</BalanceValue>
                    </BalanceContainer>
                    <BalanceUpdated>Atualizado neste momento</BalanceUpdated>
                </BalanceInfo>
                <BalanceAction>
                    <Button onPress={ () => onPressShowBalance() }>
                        <Feather name='eye' size={ 20 } color='#FFF' />
                    </Button>
                </BalanceAction>
            </>
        ) : (
            <>
                <BalanceInfo>
                    <BalanceTitle>{ title }</BalanceTitle>
                    <BalanceContainer>
                        <BalanceSymbol>R$</BalanceSymbol>
                        <BalanceHidden />
                    </BalanceContainer>
                </BalanceInfo>
                <BalanceAction>
                    <Button onPress={ () => onPressShowBalance() }>
                        <Feather name="eye-off" size={ 20 } color="#FFF" />
                    </Button>
                </BalanceAction>
            </>
        )
}