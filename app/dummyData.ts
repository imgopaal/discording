import { faker } from '@faker-js/faker'

export function createRandomFriend(): Friend {
	return {
		id: faker.string.uuid(),
		imageUrl: faker.image.avatar(),
		imageAlt: faker.lorem.word(),
		isOnline: faker.datatype.boolean(),
		name: faker.person.fullName(),
	}
}

export const Friends: Friend[] = faker.helpers.multiple(createRandomFriend, {
	count: 15,
})

export function createRandomServer(): Server {
	return {
		id: faker.string.uuid(),
		title: faker.lorem.word(),
		initials: faker.lorem.words(4),
		imageUrl: faker.image.avatar(),
		notif: faker.datatype.boolean(),
	}
}

export const servers: Server[] = faker.helpers.multiple(createRandomServer, {
	count: 4,
})
export function createMessages(): Message {
	return {
		message_id: faker.string.uuid(),
		message: faker.lorem.sentence(),
		time: faker.date.recent(),
		imageUrl: faker.image.avatar(),
		imageAlt: faker.lorem.word(),
		full_name: faker.person.fullName(),
	}
}

export const messages: Message[] = faker.helpers.multiple(createMessages, {
	count: 200,
})
