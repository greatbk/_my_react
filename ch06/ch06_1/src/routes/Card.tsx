import type {AppState} from '../store'
import type {Card as CardType} from '../store/commonTypes'
import * as CE from '../store/cardEntities'
import {useCallback, useState, useEffect} from 'react'
import {useLocation, useNavigate, useParams, useSearchParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Div, Avatar} from '../components'

export default function Card() {
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()
  const [search] = useSearchParams()

  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  const [card, setCard] = useState<CardType | null>(null)
  const {cardid} = params
  const cardEntities = useSelector<AppState, CE.State>(({cardEntities}) => cardEntities)

  useEffect(() => {
    if (!cardEntities || !cardid) {
      return
    }

    cardEntities[cardid] && setCard(notUsed => cardEntities[cardid])
  }, [cardEntities, cardid])

  if (!card) {
    return (
      <div>
        <p>location: {JSON.stringify(location, null, 2)}</p>
        <p>params: {JSON.stringify(params, null, 2)}</p>
        <p>cardid: {params['cardid']}</p>
        <p>
          from: {search.get('from')}, to: {search.get('to')}
        </p>
        <button className="mt-4 btn btn-primary btn-xs" onClick={goBack}>
          go Back
        </button>
      </div>
    )
  }

  return (
    <div className="p-4">
      <Div src={card.image} className="w-full" minHeight="10rem" height="10rem" />
      <Div className="flex flex-row items-center mt-4">
        <Avatar src={card.writer.avatar} size="2rem" />
        <Div className="ml-2">
          <p className="text-xs font-bold">{card.writer.name}</p>
          <p className="text-xs font-gray-500">{card.writer.jobTitle}</p>
        </Div>
      </Div>
      <button className="mt-4 btn btn-primary btn-xs" onClick={goBack}>
        go Back
      </button>
    </div>
  )
}
