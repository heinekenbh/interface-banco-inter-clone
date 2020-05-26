import styled from 'styled-components/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export const ButtonHelp = styled.TouchableHighlight`
    backgroundColor: #FFF;
    padding: 16px;
`

export const SectionTitle = styled.Text`
    fontSize: 14px;
    color: #8D91A7;
    marginBottom: 5px;
`

export const ButtonContainer = styled.View`
    backgroundColor: #F5F6FA;
    padding: 16px;
    justifyContent: space-between;
    alignItems: center;
    borderRadius: 8px;
    flexDirection: row;
`

export const ButtonInfo = styled.View`
    flexDirection: row;
`

export const Img = styled.Image`
    backgroundColor: #FFF;
    width: 40px;
    height: 40px;
    borderRadius: 20px;
`

export const ButtonTitle = styled.Text`
    fontSize: 16px;
    marginLeft: 8px;
    color: #8D91A7;
`

export const Icon = styled(MaterialIcons)`
    backgroundColor: #FFF;
    padding: 10px;
    borderRadius: 20px;
`