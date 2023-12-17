"use client"

import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react"
import {
	PresentationChartBarIcon,
	DocumentTextIcon,
	DocumentIcon,
	AcademicCapIcon,
	ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const DefaultSidebar = () => {
	return (
		<Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
			<Link
				href="https://team37.co"
				className="flex justify-center pb-2"
				target="_blank"
			>
				<Image
					src="/logo.png"
					height={150}
					width={200}
					alt="Team 37 logo"
				/>
			</Link>
			<List>
				<ListItem>
					<ListItemPrefix>
						<PresentationChartBarIcon height={24} width={24} />
					</ListItemPrefix>
					Dashboard
				</ListItem>
				<ListItem>
					<ListItemPrefix>
						<DocumentTextIcon height={24} width={24} />
					</ListItemPrefix>
					My Course
				</ListItem>
				<ListItem>
					<ListItemPrefix>
						<AcademicCapIcon height={24} width={24} />
					</ListItemPrefix>
					Certificate
				</ListItem>
				<ListItem>
					<ListItemPrefix>
						<ChatBubbleBottomCenterTextIcon
							height={24}
							width={24}
						/>
					</ListItemPrefix>
					Discussion
				</ListItem>
			</List>
		</Card>
	)
}

export default DefaultSidebar
