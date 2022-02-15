module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		spacing: {
			0: '0px',
			px: '1px',
			xs: '5px',
			sm: '10px',
			md: '15px',
			lg: '20px',
			xl: '30px',
			xxl: '35px',
			//larger explicit values 👇
			40: '40px',
			90: '90px',
			160: '160px',
			300: '300px',
			400: '400px',
			600: '600px',
			full: '100%'
		},
		fontSize: {
			tall: ['18px', '140%'],
			default: ['15px', '140%'],
			tiny: ['12px', '150%'],
			labelTiny: ['12px', '100%']
		},
		fontWeight: {
			regular: '400',
			bold: '600',
			black: '800'
		},
		borderRadius: {
			px: '1px',
			xs: '5px',
			sm: '10px',
			DEFAULT: '15px',
			lg: '20px',
			full: '9999px'
		},
		maxWidth: {
			lg: '600px'
		},
		ringColor: {
			primary: '#74FF66'
		},
		boxShadow: {
			default: 'rgb(64 64 64 / 10%) 0px 0px 15px, rgb(64 64 64 / 5%) 0px 0px 3px 1px'
		},
		extend: {
			colors: {
				black: '#111111',
				gray: {
					darker: '#2D2D2D',
					dark: '#808080',
					light: '#F1F2F3',
					lighter: '#E1E1E1',
				},
				white: '#FFFFFF',
				primary: '#74FF66',
			},
			backgroundColor: {
				default: 'var(--bg-default)',
				subtle: 'var(--bg-subtle)',
				inverse: 'var(--bg-inverse)',
			},
			textColor: {
				default: 'var(--text-default)',
				subtle: 'var(--text-subtle)',
				inverse: 'var(--text-inverse)'
			},
			borderColor: {
				DEFAULT: 'var(--border-soft)',
				hard: 'var(--border-hard)',
			},
			maxHeight: {
				post: '500px'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
