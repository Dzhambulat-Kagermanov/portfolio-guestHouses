import { TBookingForm } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { endingsFormatter } from '@/shared/lib/endingsFormatter/endingsFormatter'
import { IRoomsCardInfoData, TService } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { Typography } from '@/shared/ui/Typography/Typography'
import { notFound } from 'next/navigation'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props
	extends IClassName,
		Partial<Pick<IRoomsCardInfoData, 'title'>>,
		Partial<Pick<TBookingForm, 'nightsQnt'>> {
	service?: TService
}
const Footer: FC<Props> = ({ className, service, title, nightsQnt }) => {
	return (
		<div className={cn(cls.footer, [className])}>
			<div className={cn(cls.group)}>
				<Typography weight='M' tag='h2'>
					{title || notFound()}
				</Typography>
				<Typography weight='M' tag='h2'>
					{service?.price.withTaxes && nightsQnt
						? `${service.price.withTaxes} * ${nightsQnt} = ${
								service?.price.withTaxes * nightsQnt
						  } руб`
						: notFound()}
				</Typography>
			</div>
			<div className={cn(cls.group)}>
				<Typography weight='M' tag='h2'>
					Кол-во ночей
				</Typography>
				<Typography weight='M' tag='h2'>
					{nightsQnt
						? `${nightsQnt} ${endingsFormatter({
								itemQuantity: nightsQnt,
								singPluralEnding: 'ночь',
								pluralEnding: 'ночей',
								singularEnding: 'ночи',
						  })}`
						: notFound()}
				</Typography>
			</div>
		</div>
	)
}

export default Footer
