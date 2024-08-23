'use client'
import { validateSchema } from '@/entities/HomeFormElement/model/validateSchema'
import { useHomeFormData } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Button, Typography } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {}
const FeatureBtn: FC<Props> = ({ className }) => {
	const formContext = useHomeFormData(state => state.formContext)
	const setValue = useHomeFormData(state => state.setValue)
	const router = useRouter()

	const onSubmit = (data: typeof validateSchema.fields) => {
		setValue('dateIn', data['home-dateIn'])
		setValue('dateOut', data['home-dateOut'])
		setValue('guests', data['home-guests'])
		router.push('/rooms')
	}
	return (
		<Button
			type='button'
			className={cn(cls.btn, [className])}
			onClick={formContext && formContext.handleSubmit(onSubmit)}
		>
			<Typography weight='M'>Проверить</Typography>
		</Button>
	)
}

export { FeatureBtn }
