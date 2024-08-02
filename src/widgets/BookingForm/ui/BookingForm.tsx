import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Button } from '@/shared/ui/Button/Button'
import { Container } from '@/shared/ui/Container/Container'
import { Typography } from '@/shared/ui/Typography/Typography'
import { FC } from 'react'
import cls from './BookingForm.module.scss'
import Content from './Content/Content'
import Head from './Head/Head'

interface Props extends IClassName {}
const BookingForm: FC<Props> = ({ className }) => {
	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.wrapper, [className])}
		>
			<form method='post' className={cn(cls.form)}>
				<Head className={cn(cls.head)} />
				<Content className={cn(cls.content)} />
				<div className={cn(cls.btnWrapper)}>
					<Button className={cn(cls.btn)} type='submit'>
						<Typography weight='M'>Отправить</Typography>
					</Button>
					<Typography weight='R'>
						Нажмите отправить, что бы получить сведения об оплате
					</Typography>
				</div>
			</form>
		</Container>
	)
}

export { BookingForm }
