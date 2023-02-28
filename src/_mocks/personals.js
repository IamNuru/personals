import { faker } from "@faker-js/faker"
const personals = [...Array(10)].map((_, index) => {
    return {
        id: faker.datatype.uuid(),
        title: faker.lorem.words(1),
        content: faker.lorem.word(20),
    }
})

export default personals;