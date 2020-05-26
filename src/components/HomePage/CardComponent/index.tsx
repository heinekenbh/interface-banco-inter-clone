import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

import { 
  Card as CardComponent,
  CardContainer,
  CardHeader,
  CardHeaderContainer,
  Button,
  Icon,
  CardTitle,
  CardBody,
  Img,
  CardDescription
} from './styles'
import ICard from '../../../interfaces/ICard'
import ICardInfo from '../../../interfaces/ICardInfo'

export default function Card({
  showCardContent,
  setShowCardContent,
  card
}: ICard) {

  const _renderCardContent = (card: ICardInfo) => {
    if (card.id != 0 && !showCardContent) {
      return (
        <CardBody>
          <Img
            source={ card.iconNotSee || null }
          />
          <CardDescription>
            { `As informações estão\nocultas para garantir sua\nprivacidade, para habilitá-\nlas, basta clicar no olho\nacima` }
          </CardDescription>
        </CardBody>
      )
    }
    else if (card.id != 0 && showCardContent) {
      return (
        <CardBody>
          <CardDescription>
            
          </CardDescription>
        </CardBody>
      )
    }
    else if (card.id == 0) {
      return (
        <CardBody>
          <CardDescription>

          </CardDescription>
        </CardBody>
      )
    }

    return <CardBody />
  }

  const _renderSeeButton = (cord: ICardInfo) => {
    if (card.id != 0) {
      return (
        <Button onPress={ () => setShowCardContent(!showCardContent) } >
          { (
            !showCardContent ? 
            <Feather name='eye-off' size={ 14 } color='#DB772C' /> :
            <Feather name='eye' size={ 14 } color='#8D91A7' />
          ) }
        </Button>
      )
    }

   return null
  }

  return (
    <CardComponent 
      key={ card.id }
      style={{ height: card.height }}
    >
      <CardContainer style={{ opacity: card.opacity }}>
        <CardHeader>
          <CardHeaderContainer>
            <Icon source={ card.icon } />
            <CardTitle>{ card.title }</CardTitle>
          </CardHeaderContainer>
          { _renderSeeButton(card) }
        </CardHeader>
        { _renderCardContent(card) }
      </CardContainer>
    </CardComponent>
  )
}