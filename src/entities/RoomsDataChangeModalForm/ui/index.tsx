'use client'
import { useHomeFormData, useModal } from '@/shared/hooks'
import { CalendarIn, CalendarOut, User } from '@/shared/icons'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Button, Input, Typography } from '@/shared/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { validateSchema } from '../model/validateSchema'
import cls from './index.module.scss'

interface Props extends IClassName {}
const RoomsDataChangeModalForm: FC<Props> = ({ className }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		trigger,
	} = useForm({
		resolver: yupResolver(validateSchema),
		defaultValues: {
			'rooms-dateIn': useHomeFormData(state => state.dateIn),
			'rooms-dateOut': useHomeFormData(state => state.dateOut),
			'rooms-guests': useHomeFormData(state => state.guests),
		},
		mode: 'onChange',
	})
	const setRoomsChangeDataModalState = useModal(state => state.toggleModalState)

	const setHomeFormValue = useHomeFormData(state => state.setValue)
	const onSubmit = (data: typeof validateSchema.fields) => {
		setHomeFormValue('dateIn', data['rooms-dateIn'])
		setHomeFormValue('dateOut', data['rooms-dateOut'])
		setHomeFormValue('guests', data['rooms-guests'])
		setRoomsChangeDataModalState('rooms-changeData')
	}

	return (
		<form className={cn(cls.form)}>
			<Input
				label='Дата въезда'
				icon={<CalendarIn color='var(--grey-light-100)' />}
				type='date'
				{...register('rooms-dateIn', {
					onChange: () => {
						trigger('rooms-dateOut')
					},
				})}
				className={cn(cls.inputWrapper)}
				contentClass={cn(cls.inputContent)}
				inputClass={cn(cls.input)}
				error={errors['rooms-dateIn']?.message}
			/>
			<Input
				label='Дата выезда'
				icon={<CalendarOut color='var(--grey-light-100)' />}
				type='date'
				{...register('rooms-dateOut', {
					onChange: () => {
						trigger('rooms-dateIn')
					},
				})}
				className={cn(cls.inputWrapper)}
				contentClass={cn(cls.inputContent)}
				inputClass={cn(cls.input)}
				error={errors['rooms-dateOut']?.message}
			/>
			<Input
				label='Кол-во гостей'
				icon={<User color='var(--grey-light-100)' />}
				{...register('rooms-guests')}
				className={cn(cls.inputWrapper)}
				contentClass={cn(cls.inputContent)}
				inputClass={cn(cls.input)}
				error={errors['rooms-guests']?.message}
			/>
			{/*  @ts-ignore  */}
			<Button className={cn(cls.submitBtn)} onClick={handleSubmit(onSubmit)}>
				<Typography weight='M'>Изменить</Typography>
			</Button>
		</form>
	)
}

export { RoomsDataChangeModalForm }
