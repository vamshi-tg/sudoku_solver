FROM node:13.12.0-alpine AS builder

WORKDIR /app

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./

CMD ["yarn", "build"]

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/public/ .
# Containers run nginx with global directiv
ENTRYPOINT ["nginx", "-g", "daemon off;"]