'use client'
import { validateSchema } from '@/entities/BookingFormElement'
import { useBookingFormData } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Button, Typography } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {}
const BookingFormSaveDataOnSubmit: FC<Props> = ({ className }) => {
	const router = useRouter()
	const formContext = useBookingFormData(state => state.formContext)
	const setValue = useBookingFormData(state => state.setValue)

	const onSubmit = (data: typeof validateSchema.fields) => {
		for (const key in data) {
			//@ts-ignore
			setValue(key.replace('booking-', ''), data[key])
		}
		router.push('/booking/details')
	}

	return (
		<Button
			className={cn(cls.btn, [className])}
			type='submit'
			onClick={formContext && formContext.handleSubmit(onSubmit)}
		>
			<Typography weight='M'>Продолжить</Typography>
		</Button>
	)
}

export { BookingFormSaveDataOnSubmit }
