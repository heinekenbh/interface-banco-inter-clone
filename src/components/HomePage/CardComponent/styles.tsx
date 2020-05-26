import styled from 'styled-components/native'
import { 
    Dimensions,
    Animated
} from 'react-native'

const CARD_WIDTH = Dimensions.get('window').width * 0.8 - 8

export const Card = styled(Animated.View)`
    backgroundColor: #FFF;
    width: ${ CARD_WIDTH }px;
    elevation: 12;
    marginTop: 5px;
    marginHorizontal: 4px;
    padding: 16px;
    borderRadius: 8px;
`

export const CardContainer = styled(Animated.View)`

`

export const CardHeader = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
`

export const CardHeaderContainer = styled.View`
    flexDirection: row;
    alignItems: center;
`

export const Button = styled.TouchableWithoutFeedback`

`

export const Icon = styled.Image`
    width: 22px;
    height: 22px;
    marginRight: 10px;
`

export const CardTitle = styled.Text`
    color: #8D91A7;
    fontSize: 13px;
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