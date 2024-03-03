//моковые данные

import { faker } from "@faker-js/faker";

export const list = Array.from({ length: 177 }, (value, index) => ({
  name: faker.person.fullName(), // Случайное имя
  id: index + 1, // ID
  boolean: faker.datatype.boolean(), // True или false
  date: faker.date.past().toISOString(), // Дата в формате ISO 8601
  enum: faker.number.int({ min: 1, max: 5 }), // Случайное число из массива [1, 2, 3, 4, 5] для enum
  img: faker.image.url(),
}));
