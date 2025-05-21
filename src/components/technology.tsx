import Image from 'next/image';
import React from 'react';

interface Props {
	name?: string;
	image: string;
}

export const Technology = ({ name, image }: Props) => {
	return (
		<span className="flex flex-col items-center justify-between text-nowrap">
			<Image alt="IMG" src={`/technologys/${image}`} width={36} height={36} />
			<span className="flex items-center justify-center gap-2 text-xs font-medium px-2.5 py-0.5 rounded-sm bg-card max-w-14 text-ellipsis text-nowrap">
				{name}
			</span>
		</span>
	);
};
