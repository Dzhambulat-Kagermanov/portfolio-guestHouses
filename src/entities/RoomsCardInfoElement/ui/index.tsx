import { cn } from '@/shared/lib'
import { IRoomsCardAllData } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { Button } from '@/shared/ui/Button/Button'
import { Container } from '@/shared/ui/Container/Container'
import { Typography } from '@/shared/ui/Typography/Typography'
import { PageLogoTitle } from '@/widgets/PageLogoTitle'
import { FC, ReactNode } from 'react'
import Content from './Content/Content'
import cls from './index.module.scss'
import Slider from './Slider/Slider'
import Table from './Table/Table'

export type TTableItem = { title: ReactNode; items: ReactNode[] }
export interface IRoomsCardInfoProps
	extends Omit<
			IRoomsCardAllData,
			| 'availableRooms'
			| 'maxGuests'
			| 'previewDescription'
			| 'previewImg'
			| 'services'
			| 'slug'
		>,
		IClassName {
	selectedService: string
	tableData: [TTableItem, TTableItem]
}

const RoomsCardInfoElement: FC<
	IRoomsCardInfoProps & { featureBtn: ReactNode }
> = ({
	className,
	selectedService,
	conditions,
	description,
	roomImages,
	tableData,
	featureBtn,
	title,
}) => {
	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.cardInfo, [className])}
		>
			<div className={cn(cls.contentWrapper)}>
				<PageLogoTitle
					title={title}
					className={cn(cls.titleWrapper)}
					titleClass={cn(cls.title)}
				>
					<Typography weight='M' className={cn(cls.roomsVariant)}>
						{selectedService}
					</Typography>
				</PageLogoTitle>
				<Content
					conditions={conditions}
					description={description}
					className={cn(cls.description)}
				/>
			</div>
			{roomImages && <Slider images={roomImages} className={cn(cls.slider)} />}

			<Table
				caption={<Typography weight='SB'>Цена за 1 ночь</Typography>}
				className={cn(cls.table)}
				groups={tableData}
			/>
			{featureBtn}
		</Container>
	)
}

export { RoomsCardInfoElement }
