import { RoomsElementServices } from '@/entities/RoomsElementServices'
import { cn } from '@/shared/lib'
import { IRoomsCardAllData, TService } from '@/shared/types'
import { FC } from 'react'
import FeatureButton from './FeatureButton/FeatureButton'
import cls from './RoomsElementAddService.module.scss'

interface Props extends Pick<IRoomsCardAllData, 'slug'> {
	roomsElementServicesClass?: string
	roomsElementServicesBtnClass?: string
	service: TService
}
const RoomsElementAddService: FC<Props> = ({
	service,
	slug,
	roomsElementServicesClass,
	roomsElementServicesBtnClass,
}) => {
	return (
		<RoomsElementServices
			className={cn(cls.services, [roomsElementServicesClass])}
			featureBtn={
				<FeatureButton
					service={service}
					slug={slug}
					className={cn(cls.featureBtn, [roomsElementServicesBtnClass])}
				/>
			}
			service={service}
		/>
	)
}

export { RoomsElementAddService }
