import React, { useState } from 'react'
import Swiper from 'react-native-swiper'

import { 
    Gradient,
    Container,
    Balance as BalanceContainer,
    Dot,
    ActiveDot,
    ProfilePhoto,
} from './styles'
import Balance from '../BalanceComponent'

export default function Header() {

    const [ showBalance, setShowBalance ] = useState(true)

    const handleBalanceVisibility = () => setShowBalance(!showBalance)

    const balances = [
        { 
            id: 0, 
            title: 'Saldo em Conta', 
            value: 0.99
        },
        { 
            id: 1, 
            title: 'Limite Disponível', 
            value: 0
        },
        { 
            id: 2, 
            title: 'Investimento Total', 
            value: 230.12
        }
    ]

    const _renderBalances = () => (
        balances.map(balance => (
                <BalanceContainer key={ balance.id }>
                    <Balance 
                        title={ balance.title }
                        value={ balance.value }
                        showBalance={ showBalance }
                        onPressShowBalance={ handleBalanceVisibility }
                    />
                </BalanceContainer>
            )
        )
    )

    return (
        <Gradient
            start={{ x: 0, y: 0 }} 
            end={{ x: 1, y: 0 }}
            colors={[ '#EC682E', '#EE7F31' ]}
        >
            <Container>
                <Swiper 
                    loop={ false }
                    autoplay={ false }
                    showsPagination={ true }
                    overScrollMode='never'
                    dot={ <Dot /> }
                    activeDot={ <ActiveDot /> }
                    paginationStyle={{ top: 50, justifyContent: 'flex-start' }}
                >
                    { _renderBalances() }
                </Swiper>
                <ProfilePhoto
                    source={ require('../../../../assets/profile_picture.png') }
                />
            </Container>
        </Gradient>
    )
}