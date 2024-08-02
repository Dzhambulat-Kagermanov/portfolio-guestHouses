import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Button } from '@/shared/ui/Button/Button'
import { Container } from '@/shared/ui/Container/Container'
import { Typography } from '@/shared/ui/Typography/Typography'
import { FC, ReactNode } from 'react'
import Content from './Content/Content'
import cls from './RoomsCardInfo.module.scss'
import Slider from './Slider/Slider'
import Table from './Table/Table'

export type TConditionsProps = {
	title: string
	description: string
}[]
export interface IRoomsContentProps {
	description: string[]
	conditions: TConditionsProps
}
export interface IRoomsCardInfoProps extends IClassName, IRoomsContentProps {
	title: string
	tableData: { title: ReactNode; items: ReactNode[] }[]
	roomImages: string[]
	roomsVariant: string
}
const RoomsCardInfo: FC<IRoomsCardInfoProps> = ({
	className,
	roomsVariant,
	conditions,
	description,
	roomImages,
	tableData,
	title,
}) => {
	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.cardInfo, [className])}
		>
			<div className={cn(cls.contentWrapper)}>
				<div className={cn(cls.titleWrapper)}>
					<Typography weight='SB' className={cn(cls.title)}>
						{title}
					</Typography>
					<Typography weight='M' className={cn(cls.roomsVariant)}>
						{roomsVariant}
					</Typography>
				</div>
				<Content
					conditions={conditions}
					description={description}
					className={cn(cls.description)}
				/>
			</div>
			<Slider images={roomImages} className={cn(cls.slider)} />

			<Table
				caption={<Typography weight='SB'>Цена за 1 ночь</Typography>}
				className={cn(cls.table)}
				groups={tableData}
			/>

			<Button className={cn(cls.button)}>
				<Typography weight='M'>Забронировать</Typography>
			</Button>
		</Container>
	)
}

export { RoomsCardInfo }
