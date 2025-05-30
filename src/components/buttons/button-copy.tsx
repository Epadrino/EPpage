'use client';

import { useState } from 'react';
import { ToastCopy } from '../toasts/toast-copy';

interface Props {
	textToCopy: string;
	name?: string;
	icon: React.ReactNode;
}

export const ButtonCopy = ({ textToCopy, name, icon }: Props) => {
	const [copied, setCopied] = useState(false);

	const handleCopyClick = async () => {
		try {
			await navigator.clipboard.writeText(textToCopy);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000); // 2 segundos
		} catch (err) {
			console.error('Error al copiar el texto:', err);
			alert('Hubo un error al copiar el texto. Por favor, intenta de nuevo.');
		}
	};

	return (
		<>
			<button
				type="button"
				onClick={handleCopyClick}
				className="flex gap-2 font-medium p-2 rounded-sm cursor-pointer bg-popover hover:bg-popover-foreground/10  w-full justify-center text-sky-300 transition delay-150 duration-300 ease-in-out"
			>
				{icon}
				{name}
			</button>

			{copied && <ToastCopy />}
		</>
	);
};
