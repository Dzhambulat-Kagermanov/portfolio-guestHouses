import { HomeFormElement } from '@/entities/HomeFormElement'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { FC } from 'react'
import { FeatureBtn } from './FeatureBtn'
import cls from './index.module.scss'

interface Props extends IClassName {}
const HomeFormSaveDataOnSubmit: FC<Props> = ({ className }) => {
	return (
		<HomeFormElement
			className={cn(cls.form, [className])}
			featureBtn={<FeatureBtn className={cn(cls.submitBtn)} />}
		/>
	)
}

export { HomeFormSaveDataOnSubmit }
