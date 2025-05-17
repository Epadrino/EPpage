'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ToggleTheme = () => {
	const { setTheme, theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			type="button"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className="transition cursor-pointer  p-2 rounded-lg bg-primary text-foreground"
		>
			{theme === 'dark' ? <Moon /> : <Sun />}
		</button>
	);
};
