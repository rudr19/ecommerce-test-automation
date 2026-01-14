FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache chromium firefox webkit libx11

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build || true

CMD ["npm", "run", "test:parallel"]
