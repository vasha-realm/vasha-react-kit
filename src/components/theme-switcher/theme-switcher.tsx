type ThemeSwitcherProps = {
	theme: string;
	setTheme: (theme: string) => void;
}

const ThemeMap = {
	default: {
		dark: {},
		light: 'light',
	},
	nextjs: {
		dark: 'dark',
		light: 'light',
	},
}

const ThemeSwitcher = (themeSwitcherProps: ThemeSwitcherProps) => {
	const { theme, setTheme } = themeSwitcherProps;
	return <div className="">ThemeSwitcher</div>;
};

export default ThemeSwitcher;
