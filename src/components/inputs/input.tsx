import React from 'react';

interface Props {
	type: string;
	name: string;
	placeholder: string;
	label: string;
}
export const Input = ({ type, name, placeholder, label }: Props) => {
	return (
		<>
			<label htmlFor="name" className="font-bold -mb-4 pl-5">
				{label}
			</label>
			<input
				id="name"
				type={type}
				name={name}
				className="w-full border p-2 rounded-lg"
				placeholder={placeholder}
				required
			/>
		</>
	);
};
