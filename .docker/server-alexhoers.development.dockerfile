FROM node:lts-alpine

LABEL author="Alexander Hørsholt"

WORKDIR /usr/src/app

EXPOSE 3000

ENTRYPOINT [ "node", "server.js" ]

# To build:
# docker build -f docker-node-codewithdan.dockerfile --tag codewithdan_node ../

# To run:
# docker run -d -p 8080:8080 -v $(PWD):/var/www/codewithdan -w /var/www/codewithdan codewithdan_node
# docker run -d -p 8080:8080 --name codewithdan_node codewithdan_node 
