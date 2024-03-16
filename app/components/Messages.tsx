function Messages({ messages }: { messages: Message[] }) {
	function removeTimeZone(date: Date): string {
		// Convert the date to a string in UTC format
		const utcString = date.toUTCString()
		// Remove the timezone information
		const dateString = utcString.replace(/\sGMT.*$/, '')
		return dateString
	}
	return (
		<div className="overflow-x-hidden overflow-y-scroll h-[calc(100vh-120px)] max-w-[calc(100vw-310px)]">
			{messages.map((msg: Message) => {
				const { message_id, full_name, imageUrl, imageAlt, message, time } = msg
				return (
					<div key={message_id} className="flex flex-row items-start [&:not(:first-of-type)]:mt-4 hover:bg-gray-900 py-[2px] px-4">
						<div>
							<img src={imageUrl} alt={imageAlt} className="h-10 w-10 rounded-full mr-4 mt-[6px]" />
						</div>
						<div>
							<div className="flex flex-row">
								<p className="text-md font-normal mr-2 text-white">{full_name}</p>
								<p className="text-xs font-normal leading-7">{removeTimeZone(time)}</p>
							</div>
							<div className="text-md font-normal text-text-300">{message}</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Messages
