import React from 'react'
import { StatusBar } from 'react-native'

import { } from './styles'
import Header from '../../components/LoginPage/HeaderComponent'
import LoginArea from '../../components/LoginPage/LoginAreaComponent'
import ISafe from '../../components/common/ISafeComponent'
import Interpag from '../../components/LoginPage/InterpagComponent'
import IProps from '../../interfaces/IProps'

export default function Login({ navigation }: IProps) {

    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor='rgba(0, 0, 0, .5)' translucent />
            <Header />
            <LoginArea />
            <ISafe />
            <Interpag />
        </>
    )
}