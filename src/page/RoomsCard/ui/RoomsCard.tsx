import { RoomsCardInfo, TTableGroupProps } from '@/entities/RoomsCardInfo'
import { getCardsBySlug } from '@/shared/api/cards/getCardsData'
import { cn } from '@/shared/lib'
import { IRoomsCardAllData } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { Typography } from '@/shared/ui/Typography/Typography'
import { FC } from 'react'
import cls from './RoomsCard.module.scss'

interface Props extends IClassName, Pick<IRoomsCardAllData, 'slug'> {
	selectedService?: string
}
const RoomsCard: FC<Props> = async ({ className, slug, selectedService }) => {
	const card = await getCardsBySlug(decodeURIComponent(slug))

	const TABLE_DATA: TTableGroupProps = card
		? [
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
								{price}
							</Typography>
						)
					}),
				},
		  ]
		: [
				{
					title: 'Сервис',
					items: [
						'Данные отсутствуют',
						'Данные отсутствуют',
						'Данные отсутствуют',
						'Данные отсутствуют',
					],
				},
				{
					title: 'Цены',
					items: [
						'Данные отсутствуют',
						'Данные отсутствуют',
						'Данные отсутствуют',
						'Данные отсутствуют',
					],
				},
		  ]

	return (
		<div className={cn(cls.roomsCard, [className])}>
			<RoomsCardInfo
				selectedService={selectedService}
				tableData={TABLE_DATA}
				className={cn(cls.cardInfo)}
				conditions={card?.conditions}
				description={card?.description}
				roomImages={card?.roomImages}
				title={card?.title}
			/>
		</div>
	)
}

export default RoomsCard
