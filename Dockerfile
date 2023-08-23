FROM node:14-alpine

RUN apk update\
    && apk add --no-cache\
    && apk add chromium
 
WORKDIR /src

COPY package.json ./
COPY . .

EXPOSE 3000