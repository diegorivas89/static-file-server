FROM node:12-slim

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/package.json 
RUN npm install
COPY . /app

EXPOSE 3000

CMD ["npm", "start"]
