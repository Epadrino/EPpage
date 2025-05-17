'use client';

import { useState } from 'react';
import { ToastCopy } from '../toasts/toast-copy';

interface CopyButtonProps {
	textToCopy: string; // El texto que quieres copiar
	name?: string;
	icon: React.ReactNode;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy, name, icon }) => {
	const [copied, setCopied] = useState(false);

	const handleCopyClick = async () => {
		try {
			// Intenta escribir el texto al portapapeles
			await navigator.clipboard.writeText(textToCopy);
			setCopied(true);
			// Restablece el estado 'copied' después de un tiempo para que el mensaje desaparezca
			setTimeout(() => setCopied(false), 2000); // 2 segundos
		} catch (err) {
			console.error('Error al copiar el texto:', err);
			alert('Hubo un error al copiar el texto. Por favor, intenta de nuevo.');
			// En entornos de desarrollo, a veces puede fallar si no estás en HTTPS
			// o si el usuario no ha dado permisos (aunque writeText generalmente no los pide explícitamente).
		}
	};

	return (
		<>
			<button
				type="button"
				onClick={handleCopyClick}
				className="flex gap-2 font-medium p-2 rounded-sm cursor-pointer hover:bg-primary-foreground bg-primary text-foreground w-full justify-center"
			>
				{icon}
				{name}
			</button>

			{copied && <ToastCopy />}
		</>
	);
};

export default CopyButton;
