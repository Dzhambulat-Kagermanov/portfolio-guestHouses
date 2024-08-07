import { cn } from '@/shared/lib'
import { TService } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { Typography } from '@/shared/ui/Typography/Typography'
import { FC, ReactNode } from 'react'
import cls from './RoomsElementServices.module.scss'

interface Props extends IClassName {
	service: TService
	featureBtn: ReactNode
}
const RoomsElementServices: FC<Props> = ({
	className,
	service,
	featureBtn,
}) => {
	return (
		<div className={cn(cls.service, [className])}>
			<Typography weight='SB' className={cn(cls.price)}>
				{`${service.price.withoutTaxes} руб`}
			</Typography>
			<Typography weight='R' className={cn(cls.night)}>
				за 1 ночь, за номер
			</Typography>
			{featureBtn}
			<Typography weight='R' className={cn(cls.serviceName)}>
				{service.title}
			</Typography>
		</div>
	)
}

export { RoomsElementServices }
