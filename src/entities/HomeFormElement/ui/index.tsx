import { Calendar, User } from '@/shared/icons'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Button, Input, Typography } from '@/shared/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { default as moment } from 'moment'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { validateSchema } from '../model/validateSchema'
import cls from './index.module.scss'

interface Props extends IClassName {}
const HomeFormElement: FC<Props> = ({ className }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(validateSchema),
		defaultValues: {
			'home-dateIn': moment().format('YYYY-MM-DD'),
			'home-dateOut': moment().add(3, 'd').format('YYYY-MM-DD'),
			'home-guests': 1,
		},
		mode: 'onChange',
	})

	const onSubmit = (data: any) => {
		console.log(data)
	}

	return (
		<form
			className={cn(cls.form, [className])}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input
				{...register('home-dateIn')}
				type='date'
				label='Дата въезда'
				error={errors['home-dateIn']?.message}
				className={cn(cls.inputWrapper)}
				inputClass={cn(cls.input)}
				icon={<Calendar color='var(--grey-light-100)' />}
				iconPos='right'
			/>
			<Input
				{...register('home-dateOut')}
				type='date'
				label='Дата выезда'
				error={errors['home-dateOut']?.message}
				className={cn(cls.inputWrapper)}
				inputClass={cn(cls.input)}
				icon={<Calendar color='var(--grey-light-100)' />}
				iconPos='right'
			/>
			<Input
				{...register('home-guests')}
				label='Гости'
				error={errors['home-guests']?.message}
				className={cn(cls.inputWrapper)}
				inputClass={cn(cls.input)}
				icon={<User color='var(--grey-light-100)' />}
				iconPos='right'
			/>
			<Button type='submit' className={cn(cls.submitBtn)}>
				<Typography weight='M'>Проверить</Typography>
			</Button>
		</form>
	)
}

export { HomeFormElement }
