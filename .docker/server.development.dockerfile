FROM node:lts-alpine

# Set author
LABEL author="Alexander Hørsholt"

# Set the default working directory
WORKDIR /usr/src/app

# Copy package.json from local root directory (relative to docker-compose.yml)
COPY ./server/package.json ./server/package-lock.json ./

# Set environment variable for development
ENV NODE_ENV development

# Cmpile the app
RUN npm install

# Copy source code to the image workdir
COPY . .

# for kubernetes it works adding this
COPY ./server ./

# Expose port
EXPOSE 3000

# Run the express server
ENTRYPOINT [ "node", "server.js" ]