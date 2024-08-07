import { RoomsCardInfo, TTableGroupProps } from '@/entities/RoomsCardInfo'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Typography } from '@/shared/ui/Typography/Typography'
import { FC } from 'react'
import cls from './RoomsCard.module.scss'

interface Props extends IClassName {
	slug: string
}
const RoomsCard: FC<Props> = ({ className, slug }) => {
	console.log(slug)

	const TITLE = 'Семейный'
	const DESCRIPTION = [
		'Идеальный выбор для семейного отдыха в Абхазии! Просторный трехместный номер с возможностью установки дополнительной кровати позволяет это!',
		'Для детей до 3-х лет бесплатно предоставляется детская кроватка (по предварительному запросу).',
	]
	const CONDITIONS = [
		{
			title: 'Оснащение номера: ',
			description:
				'Комплект банных принадлежностей,мини-холодильник, современный телевизор с кабельными каналами, кондиционер',
		},
		{
			title: 'Площадь номера: ',
			description: '11 м2',
		},
		{
			title: 'Спальные места: ',
			description: '2 односпальные или 1 двуспальная кровать',
		},
		{
			title: 'Оплата: ',
			description: 'Взимается 30 процентов от общей стоимости проживания',
		},
	]
	const IMAGES = [
		'/images/Home/Rooms/item-1.png',
		'/images/Home/Rooms/item-1.png',
		'/images/Home/Rooms/item-1.png',
		'/images/Home/Rooms/item-1.png',
	]
	const TABLE_DATA: TTableGroupProps = [
		{
			title: <Typography weight='SB'>Сервис</Typography>,
			items: [
				<Typography weight='SB'>Без питания</Typography>,
				<Typography weight='SB'>С питанием для 1х</Typography>,
				<Typography weight='SB'>С питанием для 2х</Typography>,
				<Typography weight='SB'>С питанием для 3х</Typography>,
			],
		},
		{
			title: <Typography weight='SB'>Цены</Typography>,
			items: [
				<Typography weight='SB'>1900</Typography>,
				<Typography weight='SB'>2400</Typography>,
				<Typography weight='SB'>2800</Typography>,
				<Typography weight='SB'>3200</Typography>,
			],
		},
	]
	const ROOMS_VARIANT = 'С питанием для 1'

	return (
		<div className={cn(cls.roomsCard, [className])}>
			<RoomsCardInfo
				slug={slug}
				roomsVariant={ROOMS_VARIANT}
				tableData={TABLE_DATA}
				className={cn(cls.cardInfo)}
				conditions={CONDITIONS}
				description={DESCRIPTION}
				roomImages={IMAGES}
				title={TITLE}
			/>
		</div>
	)
}

export default RoomsCard
