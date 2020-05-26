import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'

export const ISafeContainer = styled.View`
    backgroundColor: #FFF;
    paddingHorizontal: 16px;
    paddingBottom: 16px;
`

export const ISafeButton = styled.View`
    backgroundColor: #F5F6FA;
    padding: 16px;
    justifyContent: space-between;
    alignItems: center;
    borderRadius: 8px;
    flexDirection: row;
`

export const Img = styled.Image`
    width: 120px;
    height: 50px;
`

export const Icon = styled(Feather)`
    backgroundColor: #FFF;
    padding: 10px;
    borderRadius: 20px;
`

export const IconText = styled.Text`
    color: #8D91A7;
    marginTop: 5px;
    fontSize: 12px;
    textAlign: center;
`