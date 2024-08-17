import { Calendar, User } from '@/shared/icons'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Button, Container, Input, Typography } from '@/shared/ui'
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
	} = useForm({
		resolver: yupResolver(validateSchema),
		defaultValues: {
			'home-dateIn': moment().format('YYYY-MM-DD'),
			'home-dateOut': moment().format('YYYY-MM-DD'),
			'home-guests': 1,
		},
		mode: 'onChange',
	})
	return (
		<Container containerClass={cn(cls.container)}>
			<form className={cn(cls.form, [className])}>
				<Input
					{...register('home-dateIn')}
					type='date'
					placeholder={moment().format('DD.MM.YYYY')}
					label='Дата въезда'
					error={errors['home-dateIn']?.message}
					name='home-arrival-date'
					className={cn(cls.inputWrapper)}
					inputClass={cn(cls.input)}
					icon={<Calendar color='var(--grey-light-100)' />}
					iconPos='right'
				/>
				<Input
					{...register('home-dateOut')}
					type='date'
					placeholder={moment().add(1, 'd').format('DD.MM.YYYY')}
					label='Дата выезда'
					error={errors['home-dateOut']?.message}
					name='home-date-departure'
					className={cn(cls.inputWrapper)}
					inputClass={cn(cls.input)}
					icon={<Calendar color='var(--grey-light-100)' />}
					iconPos='right'
				/>
				<Input
					{...register('home-guests')}
					placeholder={'1'}
					label='Гости'
					error={errors['home-guests']?.message}
					name='home-guests'
					className={cn(cls.inputWrapper)}
					inputClass={cn(cls.input)}
					icon={<User color='var(--grey-light-100)' />}
					iconPos='right'
				/>
				<Button type='submit' className={cn(cls.submitBtn)}>
					<Typography weight='M'>Проверить</Typography>
				</Button>
			</form>
		</Container>
	)
}

export { HomeFormElement }
