### Stage 1: Compile Angular code ##
# Using node version 14.19 image, which is compatible with Angular cli version 12.2.16
FROM node:14.19-slim as build

# Set author of image
LABEL author="Alexander Hørsholt"

# Set the default working directory
WORKDIR /usr/src/app

# Copy package.json from local root directory (relative to docker-compose.yml)
COPY ./client/package.json ./client/package-lock.json ./

# Install npm packages
RUN npm install

# Copy remaining source code
COPY ./client . 

# Compile the app
RUN npm run build 

### Stage 2: ###
FROM nginx:alpine

# Copy custom nginx config
COPY ./.docker/config/nginx.production.conf /etc/nginx/nginx.conf

# Copy compiled source files to nginx webserver html folder
COPY --from=build /usr/src/app/dist/winery-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80