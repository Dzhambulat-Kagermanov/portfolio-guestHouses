import { FC } from 'react'
import cls from './About.module.scss'
import { IClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib'

interface Props extends IClassName {}
const About: FC<Props> = ({ className }) => {
	return <div className={cn(cls.about, [className])}>About</div>
}

export default About
