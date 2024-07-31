import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Button } from '@/shared/ui/Button/Button'
import { Typography } from '@/shared/ui/Typography/Typography'
import { FC, MouseEventHandler } from 'react'
import cls from './ServiceGroup.module.scss'

interface Props extends IClassName {
	price: number
	nightsText: string
	onClick?: MouseEventHandler
	labelText: string
}
const ServiceGroup: FC<Props> = ({
	className,
	labelText,
	nightsText,
	onClick,
	price,
}) => {
	return (
		<div className={cn(cls.group, [className])}>
			<Typography tag='h2' className={cn(cls.price)} weight='SB'>
				{`${price},00 руб`}
			</Typography>
			<Typography className={cn(cls.nights)} weight='R'>
				{nightsText}
			</Typography>
			<Button onClick={onClick} className={cn(cls.button)}>
				<Typography weight='M'>Выбрать</Typography>
			</Button>
			<Typography weight='R' className={cn(cls.label)}>
				{labelText}
			</Typography>
		</div>
	)
}

export default ServiceGroup
