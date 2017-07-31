export interface SavedOptions {
	'print-width': string
	'tab-width': string
	'tabs': boolean
	'semicolons': boolean
	'quotes': 'single' | 'double'
	'trailing-comma': 'none' | 'es5' | 'all'
	'bracket-spacing': boolean
	'jsx-brackets': boolean
}

export const defaults: SavedOptions = {
	'print-width': '80',
	'tab-width': '2',
	tabs: false,
	semicolons: true,
	quotes: 'double',
	'trailing-comma': 'none',
	'bracket-spacing': true,
	'jsx-brackets': false
}
