import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const SCREEN_WIDTH = Dimensions.get('window').width

export const MenuContainer = styled.View`
    marginTop: 120px;
    flexDirection: row;
    flexWrap: wrap;
    padding: 16px;
    justifyContent: space-between;
`

export const IconContainer = styled.View`
    width: 50px;
    height: 50px;
    justifyContent: center;
    alignItems: center;
    backgroundColor: #F5F6FA;
    borderRadius: 25px;
`

export const Img = styled.Image`
    width: 25px;
    height: 25px;
`

export const Option = styled.TouchableHighlight`
    width: ${ (SCREEN_WIDTH - 50) / 3 }px;
    justifyContent: center;
    alignItems: center;
    padding: 10px;
    backgroundColor: #FFF;
    borderRadius: 8px;
    marginTop: 10px;
`

export const OptionText = styled.Text`
    marginTop: 12px;
    fontSize: 11px;
    color: #4B4E5B;
    textAlign: center;
`

export const Gradient = styled(LinearGradient)`

`