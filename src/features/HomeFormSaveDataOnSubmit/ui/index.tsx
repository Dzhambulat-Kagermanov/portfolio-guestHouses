import { HomeFormElement } from '@/entities/HomeFormElement'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { FC } from 'react'
import { FeatureBtn } from './FeatureBtn'
import cls from './index.module.scss'
import adt from 'page/Home/ui/adaptive.module.scss'

interface Props extends IClassName {}
const HomeFormSaveDataOnSubmit: FC<Props> = ({ className }) => {
	return (
		<HomeFormElement
			className={cn(cls.form, [className, adt.form])}
			featureBtn={<FeatureBtn className={cn(cls.submitBtn, [adt.submitBtn])} />}
		/>
	)
}

export { HomeFormSaveDataOnSubmit }
