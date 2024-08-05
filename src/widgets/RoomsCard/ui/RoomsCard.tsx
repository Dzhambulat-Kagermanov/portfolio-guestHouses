import { RoomsElementAddService } from '@/features/RoomsElementAddService'
import { cn } from '@/shared/lib'
import { IRoomsCardAllData } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { FC } from 'react'
import cls from './RoomsCard.module.scss'

interface Props
	extends IClassName,
		Omit<IRoomsCardAllData, 'conditions' | 'roomImages' | 'description'> {}
const RoomsCard: FC<Props> = ({
	availableRooms,
	maxGuests,
	previewImg,
	services,
	title,
	className,
	slug,
	previewDescription,
}) => {
	return (
		<RoomsElementAddService
			services={services}
			slug={slug}
			previewDescription={previewDescription}
			className={cn(cls.roomsCard, [className])}
			title={title}
			availableRooms={availableRooms}
			maxGuests={maxGuests}
			previewImg={previewImg}
		/>
	)
}

export { RoomsCard }
