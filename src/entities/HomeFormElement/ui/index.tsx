'use client'
import { useHomeFormData } from '@/shared/hooks'
import { Calendar, User } from '@/shared/icons'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Input } from '@/shared/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { FC, ReactNode, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { validateSchema } from '../model/validateSchema'
import cls from './index.module.scss'

interface Props extends IClassName {
	featureBtn: ReactNode
}
const HomeFormElement: FC<Props> = ({ className, featureBtn }) => {
	const setHomeFormValue = useHomeFormData(state => state.setValue)
	const formMethods = useForm({
		resolver: yupResolver(validateSchema),
		defaultValues: {
			'home-dateIn': useHomeFormData(state => state.dateIn),
			'home-dateOut': useHomeFormData(state => state.dateOut),
			'home-guests': useHomeFormData(state => state.guests),
		},
		mode: 'onChange',
	})

	useEffect(() => {
		setHomeFormValue('formContext', formMethods)
	}, [formMethods])

	return (
		<form className={cn(cls.form, [className])}>
			<Input
				{...formMethods.register('home-dateIn', {
					onChange: () => {
						formMethods.trigger('home-dateOut')
					},
				})}
				type='date'
				label='Дата въезда'
				error={formMethods.formState.errors['home-dateIn']?.message}
				className={cn(cls.inputWrapper)}
				inputClass={cn(cls.input)}
				icon={<Calendar color='var(--grey-light-100)' />}
				iconPos='right'
			/>
			<Input
				{...formMethods.register('home-dateOut', {
					onChange: () => {
						formMethods.trigger('home-dateIn')
					},
				})}
				type='date'
				label='Дата выезда'
				error={formMethods.formState.errors['home-dateOut']?.message}
				className={cn(cls.inputWrapper)}
				inputClass={cn(cls.input)}
				icon={<Calendar color='var(--grey-light-100)' />}
				iconPos='right'
			/>
			<Input
				{...formMethods.register('home-guests')}
				label='Гости'
				error={formMethods.formState.errors['home-guests']?.message}
				className={cn(cls.inputWrapper)}
				inputClass={cn(cls.input)}
				icon={<User color='var(--grey-light-100)' />}
				iconPos='right'
			/>
			{featureBtn}
		</form>
	)
}

export { HomeFormElement }
