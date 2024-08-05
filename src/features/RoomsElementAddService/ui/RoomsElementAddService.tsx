import { RoomsElement } from '@/entities/RoomsElement'
import { RoomsElementServices } from '@/entities/RoomsElementServices'
import { cn } from '@/shared/lib'
import { IRoomsCardAllData } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { FC } from 'react'
import FeatureButton from './FeatureButton/FeatureButton'
import cls from './RoomsElementAddService.module.scss'

interface Props
	extends IClassName,
		Omit<IRoomsCardAllData, 'conditions' | 'roomImages'> {}
const RoomsElementAddService: FC<Props> = ({
	availableRooms,
	description,
	maxGuests,
	previewImg,
	services,
	title,
	className,
	slug,
}) => {
	return (
		<RoomsElement
			className={cn(cls.roomsElem, [className])}
			title={title}
			availableRooms={availableRooms}
			description={description}
			maxGuests={maxGuests}
			previewImg={previewImg}
			services={services.map((service, index) => (
				<RoomsElementServices
					key={index}
					featureBtn={<FeatureButton slug={slug} className={cls.featureBtn} />}
					service={service}
				/>
			))}
		/>
	)
}

export { RoomsElementAddService }
