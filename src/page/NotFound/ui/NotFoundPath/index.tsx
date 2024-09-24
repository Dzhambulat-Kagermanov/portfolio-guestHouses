'use client'
import { FC } from 'react'
import { Typography } from '@/shared/ui'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cls from './index.module.scss'

interface Props {
	publicPath: string
}
const NotFoundPath: FC<Props> = ({ publicPath }) => {
	const path = usePathname()
	return (
		<Typography weight='M' tag='h3' className={cls.subtitle}>
			Страница по адресу <span>{`${publicPath}${path}`}</span> не найдена.
			Перейти
			<Link href={'/'}> на главную</Link>
		</Typography>
	)
}

export { NotFoundPath }
