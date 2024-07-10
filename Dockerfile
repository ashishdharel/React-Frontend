FROM node:latest AS development

WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . .
# EXPOSE 3000
CMD ["npm","run","start"]

FROM development AS builder

RUN npm run build

FROM httpd 

EXPOSE 80

COPY --from=builder /app/build  /usr/local/apache2/htdocs/