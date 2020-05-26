import ICardInfo from './ICardInfo'

export default interface ICard {
    showCardContent: boolean,
    setShowCardContent(value: boolean): void,
    card: ICardInfo
}