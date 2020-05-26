import React, { 
  useState, 
  useEffect
} from 'react'
import { 
  Platform,
  Dimensions,
  Animated
} from 'react-native'

import { SliderContainer } from './styles'
import Card from '../CardComponent'
import ICardInfo from '../../../interfaces/ICardInfo'

export default function CardSlider() {

  const [ showCardContent, setShowCardContent ] = useState(false)

  const [ cardActive, setCardActive ] = useState(0)
  const [ cards ] = useState<ICardInfo[]>([
    {
      id: 0,
      title: 'Plataforma de Proteção Inter',
      icon: require('../../../../assets/plataformaProtecaoInter.png'),
      opacity: new Animated.Value(0),
      height: new Animated.Value(165)
    },
    {
      id: 1,
      title: 'Extrato',
      icon: require('../../../../assets/extrato.png'),
      iconNotSee: require('../../../../assets/extratoNotSee.png'),
      opacity: new Animated.Value(1),
      height: new Animated.Value(190)
    },
    {
      id: 2,
      title: 'Mastercard 3984',
      icon: require('../../../../assets/cartao.png'),
      iconNotSee: require('../../../../assets/cartaoNotSee.png'),
      opacity: new Animated.Value(0),
      height: new Animated.Value(165)
    },
    {
      id: 3,
      title: 'Plataforma Aberta Inter',
      icon: require('../../../../assets/PAI.png'),
      iconNotSee: require('../../../../assets/PAINotSee.png'),
      opacity: new Animated.Value(0),
      height: new Animated.Value(165)
    }
  ])

  const animateHeight = () => {
    cards.map((card: ICardInfo) => {
      if (cardActive == card.id) {
        Animated.parallel([
          Animated.spring(card.height, { toValue: 190 }),
          Animated.spring(card.opacity, { toValue: 1 })
        ]).start()
      }
      else {
        Animated.parallel([
          Animated.spring(card.height, { toValue: 165 }),
          Animated.spring(card.opacity, { toValue: 0 })
        ]).start()
      }
    })
  }

  useEffect(() => animateHeight(), [ cardActive ])

  const CARD_WIDTH = Dimensions.get('window').width * 0.8 - 8
  const CARD_SPACE = CARD_WIDTH - Dimensions.get('window').width * 0.1
  
  const offsets = cards.map((_card: ICardInfo, idx: number) => CARD_SPACE + 12 + idx * 8 + idx * CARD_WIDTH)

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={ false }
      overScrollMode='never'
      contentInset={{
        top: 0,
        left: 8,
        bottom: 0,
        right: 8
      }}
      contentContainerStyle={{
        paddingHorizontal: Platform.OS === 'android' ? 4 : 0
      }}
      snapToOffsets={ offsets }
      decelerationRate='fast'
      onMomentumScrollEnd={ (evt: { nativeEvent: { contentOffset: { x: any } } }) => {
        const offset = evt.nativeEvent.contentOffset.x
        const index = offset == 0 ? 0 : Math.ceil((offset - CARD_SPACE - 12) / (8 + CARD_WIDTH) + 1)
        
        setCardActive(index)
      } }
    >
      <SliderContainer>
        { cards.map((card: ICardInfo) => (
            <Card 
              key={ card.id }
              showCardContent={ showCardContent }
              setShowCardContent={ setShowCardContent }
              card={ card }
            />
          ))
        }
      </SliderContainer>
    </Animated.ScrollView>
  )
}