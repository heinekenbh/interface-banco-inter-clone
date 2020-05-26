import styled from 'styled-components/native'
import { Animated } from 'react-native'

export const Container = styled.View`
    flex: 1;
    backgroundColor: #F5F6FA;
`

export const CustomStatusBar = styled(Animated.View)`
    width: 100%;
    zIndex: 1000;
    position: absolute;
    backgroundColor: #DB772C;
`