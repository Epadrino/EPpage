import { X } from 'lucide-react';
import { useEffect } from 'react';

interface Props {
	content: React.ReactNode;
	name: string;
	setActModal: () => void;
}

export const Modal = ({ content, name, setActModal }: Props) => {
	const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			setActModal();
		}
	};

	useEffect(() => {
		const handleEscapeKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setActModal();
			}
		};

		document.addEventListener('keydown', handleEscapeKey);

		return () => {
			document.removeEventListener('keydown', handleEscapeKey);
		};
	}, [setActModal]);

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			className="fixed inset-0 bg-card/70 flex items-center justify-center z-10 p-5 backdrop-blur-xl"
			onClick={handleBackgroundClick}
		>
			<div className="bg-card p-5 rounded-lg min-w-80 w-full max-w-2xl relative md:p-10">
				<button
					type="button"
					className="absolute top-0 right-0 -translate-x-5 cursor-pointer hover:bg-foreground/10 p-1 rounded"
					onClick={setActModal}
				>
					<X />
				</button>
				<h2 className="text-center font-bold text-2xl pb-5">{name}</h2>
				{content}
			</div>
		</div>
	);
};
