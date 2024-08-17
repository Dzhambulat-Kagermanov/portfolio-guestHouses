'use client'
import { TBookingForm, useBookingFormData } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName, TService } from '@/shared/types'
import { Typography, ValidationCheckbox } from '@/shared/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { FC, ReactNode, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { validateSchema } from '../model/validateSchema'
import Content from './Content'
import Head from './Head'
import cls from './index.module.scss'

interface Props extends IClassName, Pick<TBookingForm, 'title'> {
	dropDownServices: TService[]
	submitBtn: ReactNode
}
const BookingFormElement: FC<Props> = ({
	className,
	title,
	dropDownServices,
	submitBtn,
}) => {
	const setBookingFormValue = useBookingFormData(state => state.setValue)
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
			'booking-services':
				useBookingFormData(state => state.selectedService) || '',
		},
		mode: 'onChange',
	})
	useEffect(() => {
		setBookingFormValue('title', title)
		setBookingFormValue('formContext', formMethods)
	}, [formMethods])

	return (
		<FormProvider {...formMethods}>
			<form method='post' className={cn(cls.form, [className])}>
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
	)
}

export { BookingFormElement }
