import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const ShareContainer = styled.View`
    paddingHorizontal: 16px;
    paddingTop: 20px;
    paddingBottom: 30px;
`

export const ShareTitle = styled.Text`
    fontSize: 20px;
    fontWeight: bold;
    color: #6A6E7F;
`

export const ShareSubTitle = styled.Text`
    fontSize: 15px;
    marginTop: 2px;
    color: #8D91A7;
`

export const Gradient = styled(LinearGradient)`
    width: 120px;
    marginTop: 5px;
    borderRadius: 4px;
    paddingVertical: 3px;
`

export const ButtonShare = styled.View`

`

export const Img = styled.Image`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 140px;
    height: 140px;
`

export const ButtonDescription = styled.Text`
    fontSize: 15px;
    fontWeight: bold;
    textAlign: center;
    color: #FFF;
`