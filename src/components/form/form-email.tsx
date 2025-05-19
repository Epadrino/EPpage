import React from 'react';
import { Input } from '../inputs/input';
import { ButtonPrimary } from '../buttons';

const formEmail = [
	{
		name: 'email',
		placeholder: 'email@email.com',
		type: 'email',
		label: 'Ingresa tu correo',
	},
	{
		name: 'text',
		placeholder: 'Asunto',
		type: 'text',
		label: 'Requerimiento',
		value: 'Solicitud de Servicio Web',
	},
];

export const FormEmail = () => {
	return (
		<form action={''} className="grid gap-5 p-5 w-full">
			{formEmail.map((item) => (
				<Input key={item.name} name={item.name} placeholder={item.placeholder} type={item.type} label={item.label} />
			))}
			<span className="font-bold -mb-4 pl-5">Descripcion breve</span>
			<textarea
				name="texto"
				className="w-full border p-2 rounded-lg w"
				placeholder="Escribe tu requerimiento"
				rows={5}
				required
			/>
			<ButtonPrimary name="Enviar" typeButton="submit" />
		</form>
	);
};
