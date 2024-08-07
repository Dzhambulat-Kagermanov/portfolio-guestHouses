'use client'
import { useBookingFormData } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Container } from '@/shared/ui/Container/Container'
import { Typography } from '@/shared/ui/Typography/Typography'
import { ValidationCheckbox } from '@/shared/ui/ValidationCheckbox/ValidationCheckbox'
import { yupResolver } from '@hookform/resolvers/yup'
import { FC, ReactNode, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { validateSchema } from '../model/validateSchema'
import cls from './BookingFormElement.module.scss'
import Content from './Content/Content'
import Head from './Head/Head'

export type TBookingDropDownServices = string[]

interface Props extends IClassName {
	dropDownServices: TBookingDropDownServices
	submitBtn: ReactNode
}
const BookingFormElement: FC<Props> = ({
	className,
	dropDownServices,
	submitBtn,
}) => {
	const formMethods = useForm({
		resolver: yupResolver(validateSchema),
		defaultValues: {
			'booking-aboutMeInfo':
				useBookingFormData(state => state.aboutMeInfo) || '',
			'booking-dateIn': useBookingFormData(state => state.dateIn) || '',
			'booking-dateOut': useBookingFormData(state => state.dateOut) || '',
			'booking-email': useBookingFormData(state => state.email) || '',
			'booking-firstName': useBookingFormData(state => state.firstName) || '',
			'booking-patronymic': useBookingFormData(state => state.patronymic) || '',
			'booking-phone': useBookingFormData(state => state.phone) || '',
			'booking-secondName': useBookingFormData(state => state.secondName) || '',
			'booking-guests': useBookingFormData(state => state.guests) || 1,
			'booking-isPayLater':
				useBookingFormData(state => state.isPayLater) || false,
			'booking-services': useBookingFormData(state => state.services) || '',
		},
		mode: 'onChange',
	})
	const setBookingFormValue = useBookingFormData(state => state.setValue)
	useEffect(() => {
		setBookingFormValue('formContext', formMethods)
	})

	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.wrapper, [className])}
		>
			<FormProvider {...formMethods}>
				<form method='post' className={cn(cls.form)}>
					<Head className={cn(cls.head)} />
					<Content
						className={cn(cls.content)}
						dropDownServices={dropDownServices}
					/>
					<ValidationCheckbox
						defaultChecked={formMethods.getValues('booking-isPayLater')}
						className={cn(cls.checkbox)}
						{...formMethods.register('booking-isPayLater')}
						// @ts-ignore
						setValidationValue={formMethods.setValue}
						label={<Typography weight='M'>Оплатить позже</Typography>}
					/>
					<div className={cn(cls.btnWrapper)}>
						{submitBtn}
						<Typography weight='R'>
							Нажмите "Продолжить", что бы получить сведения об оплате
						</Typography>
					</div>
				</form>
			</FormProvider>
		</Container>
	)
}

export { BookingFormElement }
