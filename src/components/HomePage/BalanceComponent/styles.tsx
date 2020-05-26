import styled from 'styled-components/native'

export const BalanceInfo = styled.View`
    width: 140px;
    height: 70px;
`

export const BalanceTitle = styled.Text`
    color: #FFF;
    fontSize: 16px;
`

export const BalanceContainer = styled.View`
    flexDirection: row;
`

export const BalanceSymbol = styled.Text`
    color: rgba(255, 255, 255, .7);
    fontSize: 20px;
    marginRight: 10px;
`

export const BalanceValue = styled.Text`
    color: #FFF;
    fontSize: 20px;
    fontWeight: bold
`

export const BalanceHidden = styled.View`
    flexGrow: 1;
    borderRadius: 4px;
    backgroundColor: rgba(255, 255, 255, .2);
`

export const BalanceAction = styled.View`
    marginLeft: 10px;
    justifyContent: center;
`

export const Button = styled.TouchableOpacity`
    
`

export const BalanceUpdated = styled.Text`
    color: rgba(255, 255, 255, .7);
    fontSize: 10px;
`