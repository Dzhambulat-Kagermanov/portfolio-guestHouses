'use client'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnchorHTMLAttributes, FC } from 'react'

interface Props extends IClassName, AnchorHTMLAttributes<HTMLAnchorElement> {
	activeClass: string
	href: string
}
const ActiveLink: FC<Props> = ({
	className = '',
	activeClass,
	href,
	children,
	...other
}) => {
	const router = usePathname()

	return (
		<Link
			{...other}
			href={href}
			className={cn(className, [], { [activeClass]: router === href })}
		>
			{children}
		</Link>
	)
}

export { ActiveLink }
