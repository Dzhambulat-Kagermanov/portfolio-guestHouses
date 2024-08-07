import { TBookingForm } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { endingsFormatter } from '@/shared/lib/endingsFormatter/endingsFormatter'
import { IRoomsCardInfoData, TService } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { Typography } from '@/shared/ui/Typography/Typography'
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
					{title || 'Данные отсутствуют'}
				</Typography>
				<Typography weight='M' tag='h2'>
					{service?.price ? `${service?.price} руб` : 'Данные отсутствуют'}
				</Typography>
			</div>
			<div className={cn(cls.group)}>
				<Typography weight='M' tag='h2'>
					Кол-во ночей
				</Typography>
				<Typography weight='M' tag='h2'>
					{nightsQnt
						? `${nightsQnt} ${endingsFormatter({
								itemQuantity: 2,
								singPluralEnding: 'ночь',
								pluralEnding: 'ночей',
								singularEnding: 'ночи',
						  })}`
						: 'Данные отсутствуют'}
				</Typography>
			</div>
		</div>
	)
}

export default Footer
