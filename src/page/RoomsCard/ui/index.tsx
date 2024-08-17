import { TTableItemsGroup } from '@/entities/RoomsCardInfoElement'
import { RoomsCardInfoBooking } from '@/features/RoomsCardInfoBooking'
import { getCardsBySlug } from '@/shared/api'
import { cn } from '@/shared/lib'
import { IClassName, IRoomsCardAllData } from '@/shared/types'
import { Typography } from '@/shared/ui'
import { notFound } from 'next/navigation'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName, Pick<IRoomsCardAllData, 'slug'> {
	selectedService: string
}
const RoomsCard: FC<Props> = async ({ className, slug, selectedService }) => {
	const card = await getCardsBySlug(decodeURIComponent(slug))
	if (!card || !selectedService) return notFound()

	const TABLE_DATA: TTableItemsGroup = [
		{
			title: <Typography weight='SB'>Сервис</Typography>,
			items: card?.services.map(({ title }, index) => {
				return (
					<Typography key={index} weight='SB'>
						{title}
					</Typography>
				)
			}),
		},
		{
			title: <Typography weight='SB'>Цены</Typography>,
			items: card?.services.map(({ price }, index) => {
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
			<RoomsCardInfoBooking
				slug={slug}
				selectedService={selectedService}
				tableData={TABLE_DATA}
				className={cn(cls.cardInfo)}
				conditions={card.conditions}
				description={card.description}
				roomImages={card.roomImages}
				title={card.title}
			/>
		</div>
	)
}

export default RoomsCard
