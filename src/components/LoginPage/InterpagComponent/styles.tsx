import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Gradient = styled(LinearGradient)`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 250px;
    justifyContent: center;
    alignItems: center;
`

export const Img = styled.Image`
    width: 130px;
    height: 45px;
`