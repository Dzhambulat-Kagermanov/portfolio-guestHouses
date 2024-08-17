import { cn } from '@/shared/lib/'
import { IClassName } from '@/shared/types'
import { Typography } from '@/shared/ui'
import { FC } from 'react'
import cls from './index.module.scss'

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
