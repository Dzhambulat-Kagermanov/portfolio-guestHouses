import { RoomsElement } from '@/entities/RoomsElement'
import { RoomsElementServices } from '@/entities/RoomsElementServices'
import { cn } from '@/shared/lib'
import { IClassName, IRoomsCardAllData } from '@/shared/types'
import { FC } from 'react'
import FeatureButton from './FeatureButton/FeatureButton'
import cls from './RoomsElementAddService.module.scss'

interface Props
	extends IClassName,
		Omit<IRoomsCardAllData, 'conditions' | 'roomImages' | 'description'> {
	roomsElementServicesClass?: string
	roomsElementServicesBtnClass?: string
	roomsElementHeadClass?: string
	roomsElementContentClass?: string
}
const RoomsElementAddService: FC<Props> = ({
	availableRooms,
	maxGuests,
	previewImg,
	services,
	title,
	className,
	slug,
	previewDescription,
	roomsElementServicesClass,
	roomsElementServicesBtnClass,
	roomsElementHeadClass,
	roomsElementContentClass,
}) => {
	return (
		<RoomsElement
			previewDescription={previewDescription}
			className={cn(cls.roomsElem, [className])}
			title={title}
			availableRooms={availableRooms}
			maxGuests={maxGuests}
			previewImg={previewImg}
			roomsElementHeadClass={roomsElementHeadClass}
			roomsElementContentClass={roomsElementContentClass}
			services={services.map((service, index) => (
				<RoomsElementServices
					className={cn(cls.services, [roomsElementServicesClass])}
					key={index}
					featureBtn={
						<FeatureButton
							service={service}
							slug={slug}
							className={cn(cls.featureBtn, [roomsElementServicesBtnClass])}
						/>
					}
					service={service}
				/>
			))}
		/>
	)
}

export { RoomsElementAddService }
