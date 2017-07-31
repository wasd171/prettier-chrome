import 'purecss/build/pure-nr.css'
import { defaults } from './common'

interface FormElements extends HTMLFormControlsCollection {
	[index: number]: HTMLInputElement
}

const form = document.getElementById('options-form') as HTMLFormElement
const status = document.getElementById('form-status') as HTMLElement

function onSubmit(this: HTMLFormElement, event: Event) {
	event.preventDefault()
	const elements = this.elements as FormElements
	const data = {}

	for (let i = 0; i < elements.length; i++) {
		const el = elements[i]

		if (el.type !== 'submit' && el.tagName !== 'FIELDSET') {
			if (el.type === 'checkbox') {
				data[el.name] = el.checked
			} else {
				data[el.name] = el.value
			}
		}
	}

	console.log(JSON.stringify(data))

	chrome.storage.sync.set(data, () => {
		status.textContent = 'Options saved.'
		setTimeout(() => (status.textContent = ''), 750)
	})
}

function restoreSettings() {
	chrome.storage.sync.get(defaults, items => {
		const elements = form.elements as FormElements

		for (let i = 0; i < elements.length; i++) {
			const el = elements[i]

			if (el.type !== 'submit' && el.tagName !== 'FIELDSET') {
				const value = items[el.name]
				console.log(value)
				if (el.type === 'checkbox') {
					el.checked = value
				} else {
					el.value = value
				}
			}
		}
	})
}

document.addEventListener('DOMContentLoaded', restoreSettings)
form.addEventListener<'submit'>('submit', onSubmit)
