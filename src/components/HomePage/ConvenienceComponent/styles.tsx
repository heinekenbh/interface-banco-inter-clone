import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

export const ConvenienceContainer = styled.View`
    backgroundColor: #FFF;
    paddingTop: 16px;
    paddingHorizontal: 16px;
`

export const ButtonShopping = styled.TouchableHighlight`
    backgroundColor: #F5F6FA;
    padding: 16px;
    justifyContent: space-around;
    alignItems: center;
    borderRadius: 8px;
    flexDirection: row;
`

export const Img = styled.Image`
    width: 24px;
    height: 24px;
    marginRight: 20px;
`

export const ButtonTitle = styled.Text`
    fontSize: 16px;
    fontWeight: bold;
    color: #60626E;
`

export const ButtonSubTitle = styled.Text`
    marginTop: 2px;
    fontSize: 12px;
    color: #8D91A7;
`

export const OptionsContainer = styled.View`
    flexDirection: row;
    flexWrap: wrap;
    justifyContent: space-between;
`

export const Option = styled.TouchableOpacity`
    width: ${ (SCREEN_WIDTH - 38) / 3 }px;
    justifyContent: center;
    alignItems: center;
    marginTop: 14px;
`

export const OptionImgContainer = styled.View`
    width: 70px;
    height: 70px;
    backgroundColor: #F5F6FA;
    borderRadius: 35px;
    justifyContent: center;
    alignItems: center;
`

export const OptionImg = styled.Image`
    width: 50px;
    height: 50px;
`

export const OptionText = styled.Text`
    marginTop: 4px;
    fontSize: 12px;
    color: #4B4E5B;
    textAlign: center;
`

export const Divider = styled.View`
    marginTop: 32px;
    height: .5px;
    backgroundColor: #E6E7EF;
`