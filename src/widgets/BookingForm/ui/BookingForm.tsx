'use client'
import { validateSchema } from '@/entities/BookingForm/model/validateSchema'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Button } from '@/shared/ui/Button/Button'
import { Container } from '@/shared/ui/Container/Container'
import { Typography } from '@/shared/ui/Typography/Typography'
import { ValidationCheckbox } from '@/shared/ui/ValidationCheckbox/ValidationCheckbox'
import { yupResolver } from '@hookform/resolvers/yup'
import { FC, ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import cls from './BookingForm.module.scss'
import Content from './Content/Content'
import Head from './Head/Head'

export type TBookingDropDownServices = ReactNode[]

interface Props extends IClassName {
	dropDownServices: TBookingDropDownServices
}
const BookingForm: FC<Props> = ({ className, dropDownServices }) => {
	const formMethods = useForm({
		resolver: yupResolver(validateSchema),
		defaultValues: {
			'booking-dateIn': '',
			'booking-dateOut': '',
			'booking-email': '',
			'booking-firstName': '',
			'booking-guests': '',
			'booking-patronymic': '',
			'booking-phone': '',
			'booking-secondName': '',
		},
		mode: 'onChange',
	})
	const onSubmit = (data: any) => {
		console.log(data)
	}

	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.wrapper, [className])}
		>
			<FormProvider {...formMethods}>
				<form
					method='post'
					className={cn(cls.form)}
					onSubmit={formMethods.handleSubmit(onSubmit)}
				>
					<Head className={cn(cls.head)} />
					<Content
						className={cn(cls.content)}
						dropDownServices={dropDownServices}
					/>
					<ValidationCheckbox
						className={cn(cls.checkbox)}
						{...formMethods.register('booking-isPayLater')}
						// @ts-ignore
						setValidationValue={formMethods.setValue}
						label={<Typography weight='M'>Оплатить позже</Typography>}
					/>
					<div className={cn(cls.btnWrapper)}>
						<Button className={cn(cls.btn)} type='submit'>
							<Typography weight='M'>Отправить</Typography>
						</Button>
						<Typography weight='R'>
							Нажмите отправить, что бы получить сведения об оплате
						</Typography>
					</div>
				</form>
			</FormProvider>
		</Container>
	)
}

export { BookingForm }
