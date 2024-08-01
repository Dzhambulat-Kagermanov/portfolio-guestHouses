import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Container } from '@/shared/ui/Container/Container'
import { FC } from 'react'
import Card from './Card/Card'
import cls from './RoomsList.module.scss'

export type TRoomsServicesProps = {
	id: number
	price: number
	nightText: string
	label: string
}[]

export interface IRoomsCardProps {
	availableRooms: number
	maxGuestsInRoom: number
	roomsServices: TRoomsServicesProps
	title: string
	description: string
	previewImg: string
}
interface Props {
	group: IRoomsCardProps[]
}
const RoomsList: FC<Props & IClassName> = ({ group, className }) => {
	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.list, [className])}
		>
			<ul className={cls.group}>
				{group.map(
					(
						{
							availableRooms,
							description,
							maxGuestsInRoom,
							previewImg,
							roomsServices,
							title,
						},
						index
					) => (
						<Card
							key={index}
							availableRooms={availableRooms}
							description={description}
							maxGuestsInRoom={maxGuestsInRoom}
							previewImg={previewImg}
							roomsServices={roomsServices}
							title={title}
						/>
					)
				)}
			</ul>
		</Container>
	)
}

export { RoomsList }
