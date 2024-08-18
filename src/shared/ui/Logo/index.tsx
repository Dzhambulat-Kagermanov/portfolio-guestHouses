import { cn } from '@/shared/lib/'
import { IClassName } from '@/shared/types'
import { Typography } from '@/shared/ui'
import Link from 'next/link'
import React, { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {
	link?: {
		href: string
	}
}
const Logo: FC<Props> = ({ className, link }) => {
	const Tag = link ? Link : React.Fragment

	return (
		// @ts-ignore
		<Tag
			{...(link ? { href: link.href } : {})}
			className={cn(cls.link, [className])}
		>
			<Typography weight='EB' className={cn(cls.logo)} tag='h1'>
				Valentina
				<br />
				Guest House
			</Typography>
		</Tag>
	)
}

export { Logo }
