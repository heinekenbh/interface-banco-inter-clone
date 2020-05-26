import React, { useState } from 'react'
import { 
    StatusBar,
    ScrollView,
    Animated
} from 'react-native'
import { 
    Container,
    CustomStatusBar
} from './styles'

import Header from '../../components/HomePage/HeaderComponent'
import Menu from '../../components/HomePage/MenuComponent'
import CardSlider from '../../components/HomePage/CardSliderComponent'
import Convenience from '../../components/HomePage/ConvenienceComponent'
import Help from '../../components/HomePage/HelpComponent'
import ISafe from '../../components/common/ISafeComponent'
import Share from '../../components/HomePage/ShareComponent'

export default function Home() {

    const [ scrollY ] = useState(new Animated.Value(0))

    const HEADER_MAX_HEIGHT = StatusBar.currentHeight || 20
    const HEADER_MIN_HEIGHT = 0
    const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

    const headerHeight = scrollY.interpolate({
        inputRange: [ 0, HEADER_SCROLL_DISTANCE ],
        outputRange: [ HEADER_MIN_HEIGHT, HEADER_MAX_HEIGHT ],
        extrapolate: 'clamp',
    });

    return (
        <Container>
            <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
            <CustomStatusBar style={{ height: headerHeight }} />
            <ScrollView
                showsVerticalScrollIndicator={ false }
                scrollEventThrottle={ 16 }
                onScroll={ Animated.event([{
                    nativeEvent: {
                        contentOffset: { y: scrollY }
                    }
                }]) }
            >
                <Header />
                <Menu />
                <CardSlider />
                <Convenience />
                <Help />
                <ISafe />
                <Share />
            </ScrollView>
        </Container>
    )
}