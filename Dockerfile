FROM node:4.4
MAINTAINER Gayatri S Ajith <gayatri@schogini.com>
EXPOSE 8080
RUN npm install -g nodemon
RUN apt-get update && apt-get install -y nano curl wget
COPY server.js .
ENV REDIS_HOST=amadeus
CMD ["nodemon", "-L", "server.js"]
#CMD ["node", "server.js"]

