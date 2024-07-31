import { cn } from '@/shared/lib/cn/cn'
import { IClassName } from '@/shared/types/shared'
import { Typography } from '@/shared/ui/Typography/Typography'
import { FC, ReactNode } from 'react'
import cls from './Info.module.scss'

interface Props extends IClassName {
	items: ReactNode[]
	title: string
}
const Info: FC<Props> = ({ className, title, items }) => {
	return (
		<div className={cn(cls.info, [className])}>
			<Typography weight='SB' tag='h2' className={cn(cls.title)}>
				{title}
			</Typography>
			<ul className={cn(cls.group)}>
				{items.map((el, index) => (
					<li key={index} className={cn(cls.item)}>
						<Typography weight='R'>{el}</Typography>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Info
