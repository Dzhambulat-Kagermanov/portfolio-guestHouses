import { RoomsElementAddService } from '@/features/RoomsElementAddService'
import { cn } from '@/shared/lib'
import { IRoomsCardAllData } from '@/shared/types'
import { IClassName, ITag } from '@/shared/types/shared'
import React, { FC } from 'react'
import cls from './RoomsCard.module.scss'

interface Props
	extends IClassName,
		Omit<IRoomsCardAllData, 'conditions' | 'roomImages' | 'description'>,
		ITag {}
const RoomsCard: FC<Props> = ({
	availableRooms,
	tag = React.Fragment,
	maxGuests,
	previewImg,
	services,
	title,
	className,
	slug,
	previewDescription,
}) => {
	const Tag = tag
	return (
		<Tag className={cn(cls.roomsCard, [className])}>
			<RoomsElementAddService
				services={services}
				slug={slug}
				previewDescription={previewDescription}
				className={(tag !== React.Fragment && cn('', [className])) || ''}
				title={title}
				availableRooms={availableRooms}
				maxGuests={maxGuests}
				previewImg={previewImg}
			/>
		</Tag>
	)
}

export { RoomsCard }
