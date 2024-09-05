import { CalendarIn, CalendarOut, User } from '@/shared/icons'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Input } from '@/shared/ui/Input'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import cls from './index.module.scss'

interface Props extends IClassName {}
const Head: FC<Props> = ({ className }) => {
	const {
		register,
		formState: { errors },
		trigger,
	} = useFormContext()

	return (
		<div className={cn(cls.head, [className])}>
			<Input
				{...register('booking-dateIn', {
					onChange: () => {
						trigger('booking-dateOut')
					},
				})}
				label='Дата въезда'
				error={errors['booking-dateIn']?.message}
				type='date'
				contentClass={cn(cls.inputWrapper)}
				className={cn(cls.input)}
				placeholder='Дата въезда'
				icon={<CalendarIn color='var(--grey)' />}
				iconPos='right'
			/>
			<Input
				{...register('booking-dateOut', {
					onChange: () => {
						trigger('booking-dateIn')
					},
				})}
				label='Дата выезда'
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
