import { FC } from 'react'
import cls from './index.module.scss'
import { IClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Typography } from '@/shared/ui'
import { Home, Mail, Phone } from '@/shared/icons'

interface Props extends IClassName {
	infoItemClass?: string
	infoContentClass?: string
}
const Info: FC<Props> = ({ className, infoContentClass, infoItemClass }) => {
	return (
		<div className={cn(cls.info, [className])}>
			<div className={cn(cls.item, [infoItemClass])}>
				<Home color='var(--grey)' width={15} height={15} />
				<Typography weight='R'>
					Абхазия, Цандрыпш, ул.Октябрьская, д.492
				</Typography>
			</div>
			<div className={cn(cls.infoContent, [infoContentClass])}>
				<div className={cn(cls.item, [infoItemClass])}>
					<Mail color='var(--grey)' width={15} height={15} />
					<Typography weight='R'>booking@valentinahouse.ru</Typography>
				</div>
				<div className={cn(cls.item, [infoItemClass])}>
					<Phone color='var(--grey)' width={15} height={15} />
					<Typography weight='R'>8 (862) 279-56-89</Typography>
				</div>
			</div>
		</div>
	)
}

export default Info
