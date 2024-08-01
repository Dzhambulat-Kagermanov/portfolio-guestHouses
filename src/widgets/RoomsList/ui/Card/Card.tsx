import { cn } from '@/shared/lib'
import { RoomsCard } from '@/widgets/RoomsCard'
import { FC } from 'react'
import Content from '../Content/Content'
import Head from '../Head/Head'
import { IRoomsCardProps } from '../RoomsList'
import cls from './Card.module.scss'

const Card: FC<IRoomsCardProps> = ({
	availableRooms,
	description,
	maxGuestsInRoom,
	previewImg,
	roomsServices,
	title,
}) => {
	return (
		<RoomsCard
			tag='li'
			content={
				<Content
					description={description}
					services={roomsServices}
					title={title}
					className={cn(cls.roomsCardContent)}
				/>
			}
			headContent={
				<Head
					availableRooms={availableRooms}
					maxGuestsInRoom={maxGuestsInRoom}
					availableRoomsClass={cn(cls.availableRooms)}
					maxGuestsInRoomClass={cn(cls.maxGuestsInRoom)}
				/>
			}
			image={previewImg}
			headClass={cn(cls.head)}
		/>
	)
}

export default Card
