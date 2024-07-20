FROM node:alpine3.20

WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY index.js ./
EXPOSE 3000
CMD [ "node", "index.js" ]