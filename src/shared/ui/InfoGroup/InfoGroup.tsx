import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { FC, ReactNode } from 'react'
import { Typography } from '../Typography/Typography'
import cls from './InfoGroup.module.scss'

interface Props extends IClassName {
	title: string
	items: ReactNode[]
}
const InfoGroup: FC<Props> = ({ className, items, title }) => {
	return (
		<div className={cn(cls.info, [className])}>
			<Typography weight='SB' className={cn(cls.title)}>
				{title}
			</Typography>
			<ul className={cn(cls.group)}>
				{items.map((el, index) => (
					<li className={cn(cls.item)} key={index}>
						{el}
					</li>
				))}
			</ul>
		</div>
	)
}

export { InfoGroup }
