import {
	RoomsCardInfoElement,
	TTableItemsGroup,
} from '@/entities/RoomsCardInfoElement'
import { RoomsCardInfoBooking } from '@/features/RoomsCardInfoBooking'
import { getRoomsBySlug } from '@/shared/api'
import { cn } from '@/shared/lib'
import { IClassName, IRoomsCardAllData } from '@/shared/types'
import { Typography } from '@/shared/ui'
import { notFound } from 'next/navigation'
import { FC } from 'react'
import cls from './index.module.scss'
import adt from './adaptive.module.scss'

interface Props extends IClassName, Pick<IRoomsCardAllData, 'slug'> {
	selectedService: string
}
const RoomsCard: FC<Props> = async ({ className, slug, selectedService }) => {
	let data: IRoomsCardAllData | undefined

	try {
		// @ts-ignore
		data = (await getRoomsBySlug(decodeURIComponent(slug))).data
	} catch {
		data = undefined
	}
	if (!data || !selectedService) return notFound()

	const TABLE_DATA: TTableItemsGroup = [
		{
			title: (
				<Typography tag='h3' weight='SB'>
					Сервис
				</Typography>
			),
			items: data.services.map(({ title }, index) => {
				return (
					<Typography key={index} weight='SB'>
						{title}
					</Typography>
				)
			}),
		},
		{
			title: (
				<Typography tag='h3' weight='SB'>
					Цены
				</Typography>
			),
			items: data.services.map(({ price }, index) => {
				return (
					<Typography key={index} weight='SB'>
						{price.withoutTaxes}
					</Typography>
				)
			}),
		},
	]

	return (
		<div className={cn(cls.roomsCard, [className])}>
			<RoomsCardInfoElement
				classNames={{
					conditionsItem: adt.item,
					conditionsParagraph: adt.conditions,
					content: adt.content,
					contentWrapper: adt.contentWrapper,
					descriptionItem: adt.item,
					descriptionParagraph: adt.descriptions,
					gallery: adt.gallery,
					slide: adt.slide,
					slider: adt.slider,
					sliderWrapper: adt.sliderWrapper,
					table: adt.table,
					title: adt.title,
					titleWrapper: adt.titleWrapper,
					main: cn(cls.cardInfo, [adt.infoElement]),
				}}
				selectedService={selectedService}
				tableData={TABLE_DATA}
				conditions={data.conditions}
				description={data.description}
				roomImages={data.roomImages}
				title={data.title}
				featureBtn={
					<RoomsCardInfoBooking
						slug={slug}
						className={cn(cls.btn, [adt.bookingBtn])}
						selectedService={selectedService}
					/>
				}
			/>
		</div>
	)
}

export default RoomsCard
