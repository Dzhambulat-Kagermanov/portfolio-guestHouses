import { cn } from '@/shared/lib/cn/cn'
import { IClassName } from '@/shared/types/shared'
import { Container } from '@/shared/ui/Container/Container'
import { Typography } from '@/shared/ui/Typography/Typography'
import Link from 'next/link'
import { FC } from 'react'
import cls from './index.module.scss'
import Info from './Info'

interface Props extends IClassName {}
const Footer: FC<Props> = ({ className }) => {
	return (
		<footer className={cn(className || '')}>
			<Container containerClass={cn(cls.footerTop)} innerClass={cn(cls.inner)}>
				<Info
					className={cn(cls.info)}
					title='Контакты'
					items={[
						'8 (862) 279-56-89',
						'Абхазия, Цандрыпш',
						'ул.Октябрьская, д.492',
						'booking@valentinahouse.ru',
					]}
				/>
				<Info
					className={cn(cls.info)}
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
