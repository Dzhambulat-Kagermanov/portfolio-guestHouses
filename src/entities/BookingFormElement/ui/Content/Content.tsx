import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown'
import { Input } from '@/shared/ui/Input/Input'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Typography } from '@/shared/ui/Typography/Typography'
import { ValidationDropDown } from '@/shared/ui/ValidationDropDown/ValidationDropDown'
import { FC } from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import { TBookingDropDownServices } from '../BookingFormElement'
import cls from './Content.module.scss'

interface Props extends IClassName {
	dropDownServices: TBookingDropDownServices
}
const Content: FC<Props> = ({ className, dropDownServices }) => {
	const {
		register,
		setValue,
		setError,
		formState: { errors },
	} = useFormContext()
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
					setValidationValue={setValue}
					error={errors['booking-services']?.message}
					{...register('booking-services')}
					name='booking-services'
					className={cn(cls.dropdown)}
					icon={{ visible: true }}
					items={dropDownServices}
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
