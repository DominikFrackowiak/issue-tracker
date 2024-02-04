'use client'

import { usePathname } from 'next/navigation'

import Link from 'next/link'

import { AiFillBug } from 'react-icons/ai'

const navLinks = [
	{
		title: 'Dashboard',
		url: '/dashboard',
	},
	{
		title: 'Issues',
		url: '/issues',
	},
]

export default function NavBar() {
	const currentPath = usePathname()
	console.log(currentPath)
	return (
		<nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
			<Link href='/'>
				<AiFillBug />
			</Link>
			<ul className='flex space-x-6'>
				{navLinks.map(link => (
					<Link key={link.title} href={link.url}>
						<li
							className={`${
								link.url === currentPath ? 'text-zinc-900' : ' text-zinc-500'
							} hover:text-zinc-800 transition-color`}
						>
							{link.title}
						</li>
					</Link>
				))}
			</ul>
		</nav>
	)
}
