'use client';

import { BookCopy } from 'lucide-react';

import { ButtonPrimary, ButtonCopy } from '../buttons';
import Link from 'next/link';

export const SectionContac = () => {
	return (
		<section className="flex w-full justify-around gap-5">
			<section className="flex flex-col gap-5 w-1/2 p-5 border-2 border-green-300 rounded-lg">
				<span className="text-2xl font-bold text-green-300">@Social</span>
				<div className="flex gap-5 w-full">
					<Link href="https://github.com/Epadrino" target="_blank" rel="noopener noreferrer" className="w-full">
						<ButtonPrimary
							color="text-green-300"
							icon={
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-github-icon lucide-github"
								>
									<title>github</title>
									<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
									<path d="M9 18c-4.51 2-5-2-7-2" />
								</svg>
							}
							name="Github"
						/>
					</Link>
					<Link
						href="https://www.linkedin.com/in/eduardo-padrino-b40238257/"
						target="_blank"
						rel="noopener noreferrer"
						className="w-full"
					>
						<ButtonPrimary
							color="text-green-300"
							icon={
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-linkedin-icon lucide-linkedin"
								>
									<title>linkedin</title>
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
									<rect width="4" height="12" x="2" y="9" />
									<circle cx="4" cy="4" r="2" />
								</svg>
							}
							name="Likendin"
						/>
					</Link>
				</div>
			</section>
			<section className="flex flex-col gap-5 w-1/2 p-5 border-2 border-sky-300 rounded-lg">
				<span className="text-2xl font-bold text-sky-300">@Contactame</span>

				<div className="flex gap-5">
					<span className=" flex items-center justify-center w-full bg-card rounded-lg">epadrinoa@gmail.com</span>

					<div>
						<ButtonCopy textToCopy="epadrinoa@gmail.com" icon={<BookCopy />} />
					</div>
				</div>
			</section>
		</section>
	);
};
