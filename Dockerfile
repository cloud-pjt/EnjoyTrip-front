# VUE
FROM node:18 AS build
WORKDIR /app

ARG VITE_VUE_API_URL
ENV VITE_VUE_API_URL=$VITE_VUE_API_URL

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# NGINX
FROM nginx:alpine

COPY default.conf /etc/nginx/conf.d/default.conf

# 정적 파일 복사
COPY /dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
