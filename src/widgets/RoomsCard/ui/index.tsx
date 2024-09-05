import { RoomsElementAddService } from '@/features/RoomsElementAddService'
import { cn } from '@/shared/lib'
import { IRoomsCardAllData, ITag } from '@/shared/types'
import React, { FC } from 'react'
import cls from './index.module.scss'

interface Props
	extends Omit<IRoomsCardAllData, 'conditions' | 'roomImages' | 'description'>,
		ITag {
	roomsElemWrapperClass?: string
	roomsElemClass?: string
	roomsElementServicesClass?: string
	roomsElementServicesBtnClass?: string
	roomsElementHeadClass?: string
	roomsElementContentClass?: string
}
const RoomsCard: FC<Props> = ({
	availableRooms,
	tag,
	maxGuests,
	previewImg,
	services,
	title,
	roomsElemWrapperClass,
	slug,
	previewDescription,
	roomsElemClass,
	roomsElementContentClass,
	roomsElementHeadClass,
	roomsElementServicesBtnClass,
	roomsElementServicesClass,
}) => {
	const Tag = tag || 'div'
	return (
		<Tag className={cn(cls.roomsCard, [roomsElemWrapperClass])}>
			<RoomsElementAddService
				services={services}
				slug={slug}
				previewDescription={previewDescription}
				className={cn('', [roomsElemClass])}
				title={title}
				availableRooms={availableRooms}
				maxGuests={maxGuests}
				previewImg={previewImg}
				roomsElementContentClass={roomsElementContentClass}
				roomsElementHeadClass={roomsElementHeadClass}
				roomsElementServicesBtnClass={roomsElementServicesBtnClass}
				roomsElementServicesClass={roomsElementServicesClass}
			/>
		</Tag>
	)
}

export { RoomsCard }
