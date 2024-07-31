import { cn } from '@/shared/lib/cn/cn'
import { IClassName } from '@/shared/types/shared'
import { FC } from 'react'
import { Typography } from '../Typography/Typography'
import cls from './Logo.module.scss'

interface Props extends IClassName {}
const Logo: FC<Props> = ({ className }) => {
	return (
		<Typography weight='EB' className={cn(cls.logo, [className])} tag='h1'>
			Valentina
			<br />
			Guest House
		</Typography>
	)
}

export { Logo }
