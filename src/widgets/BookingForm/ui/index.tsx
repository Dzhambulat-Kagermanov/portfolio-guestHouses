import { BookingFormSaveDataOnSubmit } from '@/features/BookingFormSaveDataOnSubmit'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {}
const BookingForm: FC<Props> = ({}) => {
	return <BookingFormSaveDataOnSubmit className={cn(cls.form)} />
}

export { BookingForm }
