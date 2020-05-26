import styled from 'styled-components/native'
import { 
    Dimensions,
    Animated
} from 'react-native'

const CARD_WIDTH = Dimensions.get('window').width * 0.8 - 8

export const SliderContainer = styled(Animated.View)`
    height: 235px;
    flexDirection: row;
    alignItems: center;
`

export const CardBody = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
`

export const Img = styled.Image`
    marginTop: 25px;
    width: 100px;
    height: 100px;
`

export const CardDescription = styled.Text`
    color: #8D91A7;
    fontSize: 12px;
`