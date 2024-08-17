import { cn } from '@/shared/lib'
import { IClassName, TService } from '@/shared/types'
import { Typography } from '@/shared/ui'
import { FC, ReactNode } from 'react'
import cls from './index.module.scss'

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
