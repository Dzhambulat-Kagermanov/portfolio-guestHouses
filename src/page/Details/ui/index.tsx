import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {}
const Details: FC<Props> = ({ className }) => {
	return <div className={cn(cls.details, [className])}>Details</div>
}

export default Details
