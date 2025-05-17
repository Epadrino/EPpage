import Image from 'next/image';
import React from 'react';

interface Props {
	name: string;
	image: string;
}
export const Tecnologi = ({ name, image }: Props) => {
	return (
		<span className="flex flex-col items-center min-w-12 justify-between text-nowrap">
			<Image alt="IMG" src={`/${image}`} width={48} height={48} />
			<span className="text-xs font-medium px-2.5 py-0.5 rounded-sm bg-primary/30">{name}</span>
		</span>
	);
};
