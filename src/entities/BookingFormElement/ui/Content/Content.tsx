import { useBookingFormData } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { TService } from '@/shared/types'
import { IClassName } from '@/shared/types/shared'
import { Input } from '@/shared/ui/Input'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Typography } from '@/shared/ui/Typography/Typography'
import { ValidationDropDown } from '@/shared/ui/ValidationDropDown/ValidationDropDown'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import cls from './Content.module.scss'

interface Props extends IClassName {
	dropDownServices: TService[]
}
const Content: FC<Props> = ({ className, dropDownServices }) => {
	const {
		register,
		setValue,
		getValues,
		formState: { errors },
	} = useFormContext()

	const setCurrentService = useBookingFormData(state => state.setValue)

	return (
		<div className={cn(cls.content, [className])}>
			<Typography weight='SB' className={cn(cls.title)}>
				Информация о госте
			</Typography>
			<div className={cn(cls.group, [cls.group1])}>
				<Input
					error={errors['booking-secondName']?.message}
					{...register('booking-secondName')}
					contentClass={cn(cls.inputWrapper)}
					className={cn(cls.input)}
					placeholder='Фамилия'
				/>
				<Input
					error={errors['booking-firstName']?.message}
					{...register('booking-firstName')}
					contentClass={cn(cls.inputWrapper)}
					className={cn(cls.input)}
					placeholder='Имя'
				/>
				<Input
					error={errors['booking-patronymic']?.message}
					{...register('booking-patronymic')}
					contentClass={cn(cls.inputWrapper)}
					className={cn(cls.input)}
					placeholder='Отчество'
				/>
				<Input
					error={errors['booking-email']?.message}
					{...register('booking-email')}
					contentClass={cn(cls.inputWrapper)}
					className={cn(cls.input)}
					placeholder='Email'
				/>
				<Input
					error={errors['booking-phone']?.message}
					{...register('booking-phone')}
					contentClass={cn(cls.inputWrapper)}
					className={cn(cls.input)}
					placeholder='Номер телефона'
				/>
				<ValidationDropDown
					getActiveIndex={active => {
						setCurrentService('currentService', dropDownServices[active])
						setCurrentService(
							'selectedService',
							dropDownServices[active]?.title
						)
					}}
					defaultActiveElem={getValues()['booking-services']}
					setValidationValue={setValue}
					error={errors['booking-services']?.message}
					{...register('booking-services')}
					name='booking-services'
					className={cn(cls.dropdown)}
					icon={{ visible: true }}
					itemWrapper={item => <Typography weight='M'>{item}</Typography>}
					items={dropDownServices.map(({ title }) => title)}
					borderColor='var(--grey-light-400)'
					expandVariant='overlay'
					onSelectVariant='expand'
					placeholder={
						<Typography weight='M' className={cn(cls.dropdownPlaceholder)}>
							Выберите сервис
						</Typography>
					}
					colorDefaultIcon='var(--grey-light-400)'
					visibleActiveItemInContentVariant='note-visible-active'
				/>
			</div>
			<div className={cn(cls.group, [cls.group2])}>
				<Textarea
					error={errors['booking-aboutMeInfo']?.message}
					{...register('booking-aboutMeInfo')}
					contentClass={cn(cls.textareaWrapper)}
					textAreaClass={cn(cls.textarea)}
					placeholder='Особые пожелания'
				/>
			</div>
		</div>
	)
}

export default Content
