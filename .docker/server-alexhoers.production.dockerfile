FROM node:lts-alpine

# Set author
LABEL author="Alexander Hørsholt"

# Set the default working directory
WORKDIR /usr/src/app

# Copy package.json from local root directory (relative to docker-compose.yml)
COPY ./client/package.json ./client/package-lock.json ./

# Set environment variable for production
ENV NODE_ENV production

# Cmpile the app
RUN npm install

# Copy source code to the image workdir
COPY . .

# Expose port
EXPOSE 3000

# Run the express server
ENTRYPOINT [ "node", "server.js" ]