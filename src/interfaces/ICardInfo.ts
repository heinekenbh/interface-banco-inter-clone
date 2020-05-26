import { Animated } from 'react-native'

export default interface ICardInfo {
    id: number,
    title: string,
    icon: any,
    iconNotSee?: any,
    opacity: Animated.Value,
    height: Animated.Value
}