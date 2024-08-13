import { getCards } from '@/shared/api'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Container } from '@/shared/ui/Container/Container'
import { RoomsCard } from '@/widgets/RoomsCard'
import { FC } from 'react'
import cls from './RoomsList.module.scss'

interface Props {}
const RoomsList: FC<Props & IClassName> = async ({ className }) => {
	const roomsCard = await getCards()
	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.list, [className])}
		>
			<ul className={cls.roomsData}>
				{roomsCard.data.map(
					(
						{
							availableRooms,
							previewDescription,
							maxGuests,
							previewImg,
							services,
							title,
							slug,
						},
						index
					) => (
						<RoomsCard
							tag='li'
							previewDescription={previewDescription}
							availableRooms={availableRooms}
							maxGuests={maxGuests}
							previewImg={previewImg}
							services={services}
							slug={slug}
							title={title}
							className={cn(cls.item)}
							key={index}
						/>
					)
				)}
			</ul>
		</Container>
	)
}

export { RoomsList }
