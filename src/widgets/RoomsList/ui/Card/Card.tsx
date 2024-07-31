import { cn } from '@/shared/lib'
import { endingsFormatter } from '@/shared/lib/endingsFormatter/endingsFormatter'
import { RoomsCard } from '@/widgets/RoomsCard'
import { FC } from 'react'
import Content from '../Content/Content'
import Head from '../Head/Head'
import cls from './Card.module.scss'

interface Props {}
const Card: FC<Props> = ({}) => {
	const AVAILABLE_ROOMS: number = 6
	const MAX_PERSONS_IN_ROOMS: number = 4
	const ROOMS_SERVICES = [
		{
			id: 1,
			price: 2400,
			night: `Цена за 1 ${endingsFormatter({
				itemQuantity: 1,
				singularEnding: 'ночь',
				singPluralEnding: 'ночи',
				pluralEnding: 'ночей',
			})}`,
			label: 'Без питания',
		},
		{
			id: 2,
			price: 2400,
			night: `Цена за 1 ${endingsFormatter({
				itemQuantity: 1,
				singularEnding: 'ночь',
				singPluralEnding: 'ночи',
				pluralEnding: 'ночей',
			})}`,
			label: 'Без питания',
		},
		{
			id: 3,
			price: 2400,
			night: `Цена за 1 ${endingsFormatter({
				itemQuantity: 1,
				singularEnding: 'ночь',
				singPluralEnding: 'ночи',
				pluralEnding: 'ночей',
			})}`,
			label: 'Без питания',
		},
	]
	const TITLE = '2-Х МЕСТНЫЙ'
	const DESCRIPTION =
		'Небольшой и очень уютный светлый номер расположен на 1 этаже, что очень удобно для пожилых людей.'
	const PREVIEW = '/images/Home/Rooms/item-1.png'

	return (
		<RoomsCard
			content={
				<Content
					description={DESCRIPTION}
					services={ROOMS_SERVICES}
					title={TITLE}
					className={cn(cls.roomsCardContent)}
				/>
			}
			headContent={
				<Head
					availableRooms={AVAILABLE_ROOMS}
					maxGuestsInRoom={MAX_PERSONS_IN_ROOMS}
					availableRoomsClass={cn(cls.availableRooms)}
					maxGuestsInRoomClass={cn(cls.maxGuestsInRoom)}
				/>
			}
			image={PREVIEW}
			headClass={cn(cls.head)}
		/>
	)
}

export default Card
