import {
	RoomsCardInfoElement,
	TTableItemsGroup,
} from '@/entities/RoomsCardInfoElement'
import { RoomsCardInfoBooking } from '@/features/RoomsCardInfoBooking'
import { getCardsBySlug } from '@/shared/api'
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
	const card = await getCardsBySlug(decodeURIComponent(slug))
	if (!card || !selectedService) return notFound()

	const TABLE_DATA: TTableItemsGroup = [
		{
			title: (
				<Typography tag='h3' weight='SB'>
					Сервис
				</Typography>
			),
			// @ts-ignore
			items: card.services.map(({ title }, index) => {
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
			// @ts-ignore
			items: card.services.map(({ price }, index) => {
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
				// @ts-ignore
				conditions={card.conditions}
				// @ts-ignore
				description={card.description}
				// @ts-ignore
				roomImages={card.roomImages}
				// @ts-ignore
				title={card.title}
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
