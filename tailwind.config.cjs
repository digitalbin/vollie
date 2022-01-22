module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media',
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
			90: '90px',
			160: '160px',
			300: '300px',
			400: '400px',
			600: '600px',
			full: '100%'
		},
		textColor: {
			default: '#111',
			subtle: '#404040',
			inverse: '#fff'
		},
		backgroundColor: {
			default: '#fff',
			subtle: '#eee',
			inverse: '#111',
			foreground: '#fafafa',
			primary: '#74FF66'
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
		borderColor: {
			DEFAULT: '#eee',
			black: '#111',
			transparent: 'transparent',
			primary: '#74FF66'
		},
		borderRadius: {
			px: '1px',
			sm: '1rem',
			DEFAULT: '1.5rem',
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
