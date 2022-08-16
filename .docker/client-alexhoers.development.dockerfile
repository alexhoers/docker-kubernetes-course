### Stage 1: Build ###
FROM node:lts-alpine

LABEL author="Alexander Hørsholt"

WORKDIR /usr/src/app

EXPOSE 4200

ENTRYPOINT [ "npm", "start" ]
