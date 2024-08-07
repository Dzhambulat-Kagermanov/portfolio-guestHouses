'use client'
import { useBookingFormData } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Container } from '@/shared/ui/Container/Container'
import { Typography } from '@/shared/ui/Typography/Typography'
import { ValidationCheckbox } from '@/shared/ui/ValidationCheckbox/ValidationCheckbox'
import { yupResolver } from '@hookform/resolvers/yup'
import { FC, ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { validateSchema } from '../model/validateSchema'
import cls from './BookingFormElement.module.scss'
import Content from './Content/Content'
import Head from './Head/Head'

export type TBookingDropDownServices = ReactNode[]

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
			'booking-dateIn': '',
			'booking-dateOut': '',
			'booking-email': '',
			'booking-firstName': '',
			'booking-patronymic': '',
			'booking-phone': '',
			'booking-secondName': '',
		},
		mode: 'onChange',
	})
	useBookingFormData(state => state.setValue)('formContext', formMethods)

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
