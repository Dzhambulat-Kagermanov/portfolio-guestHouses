'use client'
import { Calendar, User } from '@/shared/icons'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Button, Container, Input, Typography } from '@/shared/ui'
import moment from 'moment'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {
	containerClass?: string
}
const HomeForm: FC<Props> = ({ className }) => {
	return (
		<Container containerClass={cn(cls.container)}>
			<form className={cn(cls.form, [className])}>
				<Input
					min={'2024-01-01'}
					max={'2025-12-31'}
					type='date'
					placeholder={moment().format('DD.MM.YYYY')}
					label='Дата въезда'
					error='test'
					name='home-arrival-date'
					className={cn(cls.inputWrapper)}
					inputClass={cn(cls.input)}
					icon={<Calendar color='var(--grey-light-100)' />}
					iconPos='right'
				/>
				<Input
					type='date'
					placeholder={moment().add(1, 'd').format('DD.MM.YYYY')}
					label='Дата выезда'
					error='test'
					name='home-date-departure'
					className={cn(cls.inputWrapper)}
					inputClass={cn(cls.input)}
					icon={<Calendar color='var(--grey-light-100)' />}
					iconPos='right'
				/>
				<Input
					placeholder={'1'}
					label='Гости'
					error='test'
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

export { HomeForm }
