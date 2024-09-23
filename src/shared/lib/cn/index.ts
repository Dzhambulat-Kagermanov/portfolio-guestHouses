type TAdditional = string | undefined

export const cn = (
	main: string,
	additional: TAdditional[] = [],
	mods: Record<string, boolean | undefined> = {}
): string => {
	return [
		...(main ? [main] : []),
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter(([key, val]) => Boolean(val))
			.map(([key, val]) => key),
	].join(' ')
}
