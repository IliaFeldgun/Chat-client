FROM node:current-alpine

WORKDIR /

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts -g

COPY . ./

CMD ["npm", "run", "start"]
