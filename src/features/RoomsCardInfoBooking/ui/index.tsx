import {
	IRoomsCardInfoProps,
	RoomsCardInfoElement,
	TTableItemsGroup,
} from '@/entities/RoomsCardInfoElement'
import { cn } from '@/shared/lib'
import { IRoomsCardAllData } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { FC } from 'react'
import FeatureBtn from './FeatureBtn'
import cls from './index.module.scss'

interface Props
	extends IClassName,
		IRoomsCardInfoProps,
		Pick<IRoomsCardAllData, 'slug'> {
	tableData: TTableItemsGroup
}
const RoomsCardInfoBooking: FC<Props> = ({
	tableData,
	slug,
	conditions,
	description,
	roomImages,
	selectedService,
	title,
	className,
}) => {
	return (
		<RoomsCardInfoElement
			conditions={conditions}
			description={description}
			roomImages={roomImages}
			selectedService={selectedService}
			tableData={tableData}
			title={title}
			className={cn(cls.cardInfo, [className])}
			featureBtn={
				<FeatureBtn
					slug={slug}
					className={cn(cls.btn)}
					selectedService={selectedService}
				/>
			}
		/>
	)
}

export { RoomsCardInfoBooking }
