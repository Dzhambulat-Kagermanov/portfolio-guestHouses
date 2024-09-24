'use client'
import { FC, useEffect, useState } from 'react'
import { IClassName } from '@/shared/types'
import { endingsFormatter } from '@/shared/lib'
import { Typography } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import cls from './index.module.scss'

interface Props extends IClassName {}
const Timer: FC<Props> = ({ className }) => {
	const navigate = useRouter()
	const [counter, setCounter] = useState<number>(5)

	useEffect(() => {
		if (counter > 0) {
			setTimeout(() => setCounter(counter - 1), 1000)
		} else {
			navigate.push('/')
		}
	}, [counter])

	return (
		<Typography tag='h4' weight='B' className={cls.redirect}>
			Перенаправление на главную через{' '}
			<span>
				<span>{counter}</span>
				{endingsFormatter({
					itemQuantity: counter,
					singPluralEnding: ' секунды',
					pluralEnding: ' секунд',
					singularEnding: ' секунду',
				})}
			</span>
		</Typography>
	)
}

export { Timer }
