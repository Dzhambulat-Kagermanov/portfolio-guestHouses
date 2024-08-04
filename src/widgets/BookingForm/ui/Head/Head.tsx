import { CalendarIn, CalendarOut, User } from '@/shared/icons'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Input } from '@/shared/ui/Input/Input'
import { FC } from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import cls from './Head.module.scss'

interface Props extends IClassName {}
const Head: FC<Props> = ({ className }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext()

	return (
		<div className={cn(cls.head, [className])}>
			<Input
				{...register('booking-dateIn')}
				error={errors['booking-dateIn']?.message}
				type='date'
				contentClass={cn(cls.inputWrapper)}
				className={cn(cls.input)}
				placeholder='Дата въезда'
				icon={<CalendarIn color='var(--grey)' />}
				iconPos='right'
			/>
			<Input
				{...register('booking-dateOut')}
				error={errors['booking-dateOut']?.message}
				type='date'
				contentClass={cn(cls.inputWrapper)}
				className={cn(cls.input)}
				placeholder='Дата выезда'
				icon={<CalendarOut color='var(--grey)' />}
				iconPos='right'
			/>
			<Input
				{...register('booking-guests')}
				error={errors['booking-guests']?.message}
				contentClass={cn(cls.inputWrapper)}
				className={cn(cls.input)}
				placeholder='Количество гостей'
				icon={<User color='var(--grey)' />}
				iconPos='right'
			/>
		</div>
	)
}

export default Head
