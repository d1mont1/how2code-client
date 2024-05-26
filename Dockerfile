# Этап 1: Сборка
FROM node:16-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и yarn.lock/package-lock.json
COPY package*.json ./
# Если вы используете yarn, то используйте следующую строку вместо предыдущей
# COPY yarn.lock ./

# Устанавливаем зависимости
RUN npm install
# Если вы используете yarn, то используйте следующую строку вместо предыдущей
# RUN yarn install

# Копируем остальные файлы проекта
COPY . .

# Сборка проекта
RUN npm run build
# Если вы используете yarn, то используйте следующую строку вместо предыдущей
# RUN yarn build

# Этап 2: Запуск
FROM node:16-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы из этапа сборки
COPY --from=builder /app ./

# Устанавливаем сервер Next.js
RUN npm install next
# Если вы используете yarn, то используйте следующую строку вместо предыдущей
# RUN yarn add next

# Устанавливаем переменную окружения для запуска в режиме продакшн
ENV NODE_ENV production

# Запуск приложения
CMD ["npm", "start"]
# Если вы используете yarn, то используйте следующую строку вместо предыдущей
# CMD ["yarn", "start"]
