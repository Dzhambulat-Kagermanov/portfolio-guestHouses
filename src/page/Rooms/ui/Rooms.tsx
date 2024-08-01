import { cn } from '@/shared/lib'
import { endingsFormatter } from '@/shared/lib/endingsFormatter/endingsFormatter'
import { IClassName } from '@/shared/types/shared'
import { RoomsInfo } from '@/widgets/RoomsInfo'
import { IRoomsCardProps, RoomsList } from '@/widgets/RoomsList'
import { FC } from 'react'
import cls from './Rooms.module.scss'

interface Props extends IClassName {}
const Rooms: FC<Props> = ({ className }) => {
	const items: IRoomsCardProps[] = [
		{
			availableRooms: 6,
			description:
				'Небольшой и очень уютный светлый номер расположен на 1 этаже, что очень удобно для пожилых людей.',
			maxGuestsInRoom: 4,
			previewImg: '/images/Home/Rooms/item-1.png',
			roomsServices: [
				{
					id: 1,
					price: 2400,
					nightText: `Цена за 1 ${endingsFormatter({
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
					nightText: `Цена за 1 ${endingsFormatter({
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
					nightText: `Цена за 1 ${endingsFormatter({
						itemQuantity: 1,
						singularEnding: 'ночь',
						singPluralEnding: 'ночи',
						pluralEnding: 'ночей',
					})}`,
					label: 'Без питания',
				},
			],
			title: '2-Х МЕСТНЫЙ',
		},
	]

	return (
		<div className={cn(cls.rooms, [className])}>
			<RoomsList group={items} />
			<RoomsInfo />
		</div>
	)
}

export default Rooms
