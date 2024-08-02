import { CalendarIn, CalendarOut, User } from '@/shared/icons'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Input } from '@/shared/ui/Input/Input'
import { FC } from 'react'
import cls from './Head.module.scss'

interface Props extends IClassName {}
const Head: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.head, [className])}>
			<Input
				type='date'
				contentClass={cn(cls.inputWrapper)}
				className={cn(cls.input)}
				name='booking-dateIn'
				placeholder='Дата въезда'
				icon={<CalendarIn color='var(--grey)' />}
				iconPos='right'
			/>
			<Input
				type='date'
				contentClass={cn(cls.inputWrapper)}
				className={cn(cls.input)}
				name='booking-dateOut'
				placeholder='Дата выезда'
				icon={<CalendarOut color='var(--grey)' />}
				iconPos='right'
			/>
			<Input
				contentClass={cn(cls.inputWrapper)}
				className={cn(cls.input)}
				name='booking-date-guests'
				placeholder='Количество гостей'
				icon={<User color='var(--grey)' />}
				iconPos='right'
			/>
		</div>
	)
}

export default Head
