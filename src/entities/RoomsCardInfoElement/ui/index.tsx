import { cn } from '@/shared/lib'
import { IRoomsCardAllData } from '@/shared/types'
import { Container, Typography } from '@/shared/ui'
import { PageLogoTitle } from '@/widgets/PageLogoTitle'
import { FC, ReactNode } from 'react'
import Content from './Content'
import cls from './index.module.scss'
import Table from './Table'
import { GalleryItem } from '@/widgets/GalleryItem'

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
	> {
	selectedService: string
	tableData: [TTableItem, TTableItem]
	classNames?: {
		descriptionParagraph?: string
		descriptionItem?: string
		conditionsParagraph?: string
		conditionsItem?: string
		titleWrapper?: string
		title?: string
		content?: string
		contentWrapper?: string
		table?: string
		gallery?: string
		slider?: string
		sliderWrapper?: string
		slide?: string
		main?: string
	}
}

const RoomsCardInfoElement: FC<
	IRoomsCardInfoProps & { featureBtn: ReactNode }
> = ({
	selectedService,
	conditions,
	description,
	roomImages,
	title,
	tableData,
	featureBtn,
	classNames,
}) => {
	console.log(conditions)

	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.cardInfo, [classNames?.main])}
		>
			<div className={cn(cls.contentWrapper, [classNames?.contentWrapper])}>
				<PageLogoTitle
					title={title}
					className={cn(cls.titleWrapper, [classNames?.titleWrapper])}
					titleClass={cn(cls.title, [classNames?.title])}
				>
					<Typography weight='M' className={cn(cls.roomsVariant)}>
						{selectedService}
					</Typography>
				</PageLogoTitle>
				<Content
					conditions={conditions}
					description={description}
					classNames={{
						conditions: classNames?.conditionsItem,
						conditionsParagraph: classNames?.conditionsParagraph,
						description: classNames?.descriptionItem,
						descriptionParagraph: classNames?.descriptionParagraph,
						main: cn(cls.content, [classNames?.content]),
					}}
				/>
			</div>
			{roomImages && (
				<GalleryItem
					sliderClasses={{
						slide: classNames?.slide,
						slider: classNames?.slider,
						wrapper: classNames?.sliderWrapper,
					}}
					titleClass={classNames?.title}
					photos={roomImages}
					title={title}
					className={cn(cls.galleryItem, [classNames?.gallery])}
				/>
			)}

			<Table
				caption={
					<Typography weight='SB' tag='h2'>
						Цена за 1 ночь
					</Typography>
				}
				className={cn(cls.table, [classNames?.table])}
				groups={tableData}
			/>
			{featureBtn}
		</Container>
	)
}

export { RoomsCardInfoElement }
