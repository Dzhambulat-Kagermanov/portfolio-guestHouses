'use client'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Container, Typography } from '@/shared/ui'
import Link from 'next/link'
import Info from './Info'
import { FC } from 'react'
import { useWindow } from '@/shared/hooks'
import Map from './Map'
import cls from './index.module.scss'

interface Props extends IClassName {
	wrapperClassName?: string
	containerClassName?: string
	infoClassName?: string
	infoGroupClassName?: string
}
const Footer: FC<Props> = ({
	wrapperClassName,
	className,
	containerClassName,
	infoClassName,
	infoGroupClassName,
}) => {
	const { isMdSmall } = useWindow()

	return (
		<footer className={cn(wrapperClassName || '')}>
			<Container
				containerClass={cn(cls.footerTop, [containerClassName])}
				innerClass={cn(cls.inner, [className])}
			>
				{isMdSmall && <Map />}

				<Info
					groupClassName={infoGroupClassName}
					className={cn(cls.info, [infoClassName])}
					title='Контакты'
					items={[
						'8 (862) 279-56-89',
						'Абхазия, Цандрыпш',
						'ул.Октябрьская, д.492',
						'booking@valentinahouse.ru',
					]}
				/>
				<Info
					groupClassName={infoGroupClassName}
					className={cn(cls.info, [infoClassName])}
					title='Информация'
					items={[
						'Заезд: с 16:00',
						'Выезд: до 12:00',
						'Бесплатный WI-FI',
						'Бесплатная парковка',
						<Link href='#'>О нас</Link>,
						<Link href='#'>Условия бронирования </Link>,
						<Link href='#'>Политика конфиденциальности</Link>,
					]}
				/>
			</Container>
			<Container containerClass={cn(cls.footerBottom)}>
				<Typography weight='M' tag='h6'>
					© 2015–2024 – VALENTINA GUEST HOUSE
				</Typography>
			</Container>
		</footer>
	)
}

export { Footer }
