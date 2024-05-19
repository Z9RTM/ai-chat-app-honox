import { useChat } from "ai/react";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2IgQwN2V2Cq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function SettingsIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
      <title>a</title>
			<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
			<circle cx="12" cy="12" r="3" />
		</svg>
	);
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function UserIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
      <title>b</title>
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</svg>
	);
}

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit, isLoading } =
		useChat();
	const content = messages.map((m) => (
		<div key={m.id}>
			{`${m.role === "user" ? (<div className="flex items-start space-x-4 justify-end">
					<div className="bg-blue-500 rounded-lg p-4 max-w-[70%] text-white">
						<p>{m.content}</p>
					</div>
					<img
						alt="User Avatar"
						className="rounded-full"
						height={40}
						src="/placeholder.svg"
						style={{
							aspectRatio: "40/40",
							objectFit: "cover",
						}}
						width={40}
					/>
				</div>) : (
        <div className="flex items-start space-x-4">
					<img
						alt="User Avatar"
						className="rounded-full"
						height={40}
						src="/placeholder.svg"
						style={{
							aspectRatio: "40/40",
							objectFit: "cover",
						}}
						width={40}
					/>
					<div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 max-w-[70%]">
						<p className="text-gray-900 dark:text-gray-100">
							{m.content}
						</p>
					</div>
				</div>)}`}
			{m.content}
		</div>
	));

	return (
		<div className="flex flex-col h-screen">
			<header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
				<h1 className="text-2xl font-bold">AI Assistant</h1>
				<div className="flex items-center space-x-4">
					<button type="button" className="hover:bg-gray-800 rounded-md px-3 py-2 transition-colors">
						<SettingsIcon className="h-6 w-6" />
					</button>
					<button type="button" className="hover:bg-gray-800 rounded-md px-3 py-2 transition-colors">
						<UserIcon className="h-6 w-6" />
					</button>
				</div>
			</header>
			<div className="flex-1 overflow-y-auto p-6 space-y-4">
        {content}
			</div>
			<form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-800 px-6 py-4 flex items-center space-x-4">
				<Input
          content={input}
					className="flex-1 bg-white dark:bg-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-100"
					placeholder="Type your message..."
					type="text"
          onChange={handleInputChange}
				/>
				<Button className="rounded-md px-4 py-2" type="submit">
					Send
				</Button>
			</form>
		</div>
	);
}
