//моковые данные

import { faker } from "@faker-js/faker";

export const list = Array.from({ length: 120 }, (value, index) => ({
  name: faker.person.fullName(), // Случайное имя
  id: index + 1, // ID
  boolean: faker.datatype.boolean(), // True или false
  date: faker.date.past().toISOString(), // Дата в формате ISO 8601
  enum: faker.datatype.number({ min: 1, max: 5 }), // Случайное число из массива [1, 2, 3, 4, 5]
  img: faker.image.imageUrl(),
}));
