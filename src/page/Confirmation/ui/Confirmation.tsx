import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { FC } from 'react'
import cls from './Confirmation.module.scss'

interface Props extends IClassName {}
const Confirmation: FC<Props> = ({ className }) => {
	return <div className={cn(cls.confirmation, [className])}>Confirmation</div>
}

export default Confirmation
