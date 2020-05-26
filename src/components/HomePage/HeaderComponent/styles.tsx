import styled from 'styled-components/native'
import { 
    Animated,
    Platform
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export const Gradient = styled(LinearGradient)`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 170px;
`

export const Container = styled.SafeAreaView`
    paddingTop:  ${ Platform.select({ ios: '0', android: '50px' }) };
    paddingHorizontal: 16px;
    flexDirection: row;
`

export const Dot = styled.View`
    backgroundColor: rgba(255, 255, 255, .2);
    width: 14px;
    height: 1px;
    marginHorizontal: 3px;
    marginVertical: 3px;
`

export const ActiveDot = styled.View`
    backgroundColor: #FFF;
    width: 14px;
    height: 1px;
    marginHorizontal: 3px;
    marginVertical: 3px;
`

export const Balance = styled(Animated.View)`
    flexDirection: row;
`

export const ProfilePhoto = styled.Image`
    width: 44px;
    height: 44px;
    borderRadius: 22px;
`