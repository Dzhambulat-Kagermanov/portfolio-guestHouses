import { TBookingForm } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Button } from '@/shared/ui/Button/Button'
import { Typography } from '@/shared/ui/Typography/Typography'
import { validateFirstNameValidation } from '@/shared/utils/validateMethods'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props
	extends IClassName,
		Omit<TBookingForm, 'nightsQnt' | 'currentService' | 'title'> {}
const FeatureBtn: FC<Props> = ({
	className,
	aboutMeInfo,
	dateIn,
	dateOut,
	email,
	firstName,
	guests,
	isPayLater,
	patronymic,
	phone,
	secondName,
	selectedService,
}) => {
	return (
		<Button
			className={cn(cls.button, [className])}
			onClick={() => {
				try {
					validateFirstNameValidation.validateSync('', {
						abortEarly: false,
						strict: true,
					})
				} catch (err) {
					console.log(err)
				} finally {
				}
			}}
		>
			<Typography weight='M'>Завершить</Typography>
		</Button>
	)
}

export default FeatureBtn
