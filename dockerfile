FROM alpine:latest

WORKDIR /app

COPY  . .

RUN apk add --update nodejs npm

RUN npm install

CMD ["npm","start"]


EXPOSE 3000