# pull the official base image  
FROM node:13.12.0-alpine as build

# set your working directory  
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH  
ENV PATH /app/node_modules/.bin:$PATH 

# install application dependencies  
COPY package.json ./  
COPY yarn.lock ./  
RUN yarn install   

COPY . ./

CMD ["yarn", "build"]

# build nginx image in second build stage
FROM nginx:alpine
COPY --from=build /app/public /usr/share/nginx.html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]