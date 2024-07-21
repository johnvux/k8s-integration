FROM node:alpine3.20

WORKDIR /home/node/app
COPY ./ ./
RUN npm install

EXPOSE 3000
CMD [ "node", "index.js" ]