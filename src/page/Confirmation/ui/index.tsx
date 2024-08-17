import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {}
const Confirmation: FC<Props> = ({ className }) => {
	return <div className={cn(cls.confirmation, [className])}>Confirmation</div>
}

export default Confirmation
