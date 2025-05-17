import { CircleCheck } from 'lucide-react';
import React from 'react';

export const ToastCopy = () => {
	return (
		<div className="flex items-center w-60 max-w-xs p-4 mb-4  rounded-lg shadow-sm  absolute -translate-10 bottom-0 right-0 bg-card/90">
			<div className="inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg ">
				<CircleCheck color="#00ff40" />
			</div>
			<div className="ms-3 text-sm font-normal">Correo Copiado</div>
		</div>
	);
};
