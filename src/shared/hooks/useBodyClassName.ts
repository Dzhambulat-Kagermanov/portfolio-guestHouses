export class UseBodyClassName {
	className: string

	constructor(className: string) {
		this.className = className || ''
	}
	addClass = () => {
		console.log(this.className)
		document.body.classList.add(this.className)
	}
	removeClass = () => {
		document.body.classList.remove(this.className)
	}
}
