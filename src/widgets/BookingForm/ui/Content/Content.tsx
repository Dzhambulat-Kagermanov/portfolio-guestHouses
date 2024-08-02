import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown'
import { Input } from '@/shared/ui/Input/Input'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Typography } from '@/shared/ui/Typography/Typography'
import { FC } from 'react'
import cls from './Content.module.scss'

interface Props extends IClassName {}
const Content: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.content, [className])}>
			<Typography weight='SB' className={cn(cls.title)}>
				Информация о госте
			</Typography>
			<div className={cn(cls.group, [cls.group1])}>
				<Input
					contentClass={cn(cls.inputWrapper)}
					name='booking-secondName'
					className={cn(cls.input)}
					placeholder='Фамилия'
				/>
				<Input
					contentClass={cn(cls.inputWrapper)}
					name='booking-firstName'
					className={cn(cls.input)}
					placeholder='Имя'
				/>
				<Input
					contentClass={cn(cls.inputWrapper)}
					name='booking-patronymic'
					className={cn(cls.input)}
					placeholder='Отчество'
				/>
				<Input
					contentClass={cn(cls.inputWrapper)}
					name='booking-email'
					className={cn(cls.input)}
					placeholder='Email'
				/>
				<Input
					contentClass={cn(cls.inputWrapper)}
					name='booking-phone'
					className={cn(cls.input)}
					placeholder='Номер телефона'
				/>
				<Dropdown
					className={cn(cls.dropdown)}
					icon={{ visible: true }}
					items={['111111', '222222', '333333']}
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
					contentClass={cn(cls.textareaWrapper)}
					name='booking-aboutMeInfo'
					textAreaClass={cn(cls.textarea)}
					placeholder='Особые пожелания'
				/>
			</div>
		</div>
	)
}

export default Content
