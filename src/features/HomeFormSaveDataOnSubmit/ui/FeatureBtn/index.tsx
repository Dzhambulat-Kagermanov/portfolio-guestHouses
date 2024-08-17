'use client'
import { IHomeFormInputs, useHomeFormData } from '@/shared/hooks'
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

	const onSubmit = (data: IHomeFormInputs) => {
		setValue('dateIn', data.dateIn)
		setValue('dateOut', data.dateOut)
		setValue('guests', data.guests)
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
