import * as prettier from 'prettier'
import * as he from 'he'
import { defaults, SavedOptions } from './common'

chrome.storage.sync.get(defaults, (items: SavedOptions) => {
	const options: prettier.Options = {}
	options.printWidth = parseInt(items['print-width'], 10)
	options.tabWidth = parseInt(items['tab-width'])
	options.useTabs = items.tabs
	options.semi = items.semicolons
	options.singleQuote = items.quotes === 'single'
	options.trailingComma = items['trailing-comma']
	options.bracketSpacing = items['bracket-spacing']
	options.jsxBracketSameLine = items['jsx-brackets']

	const list = document.getElementsByTagName('code')
	for (let i = 0; i < list.length; i++) {
		const node = list[i]

		try {
			const decoded = he.decode(node.innerHTML)
			const formatted = prettier.format(decoded, options)
			const encoded = he.encode(formatted)

			node.innerHTML = encoded
		} catch (err) {
			console.log(err)
		}
	}
})
