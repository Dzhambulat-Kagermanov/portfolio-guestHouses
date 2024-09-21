export class UseBodyClassName {
	className: string

	constructor(className: string) {
		this.className = className || ''
	}
	addClass = () => {
		document.body.classList.add(this.className)
	}
	removeClass = () => {
		document.body.classList.remove(this.className)
	}
}
