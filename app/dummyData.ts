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
		initials: faker.lorem.words(2),
		imageUrl: faker.image.avatar(),
		notif: faker.datatype.boolean(),
	}
}

export const servers: Server[] = faker.helpers.multiple(createRandomServer, {
	count: 4,
})
