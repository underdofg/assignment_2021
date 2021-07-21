FROM node:12.18
WORKDIR /home/node/app
COPY app /home/node/app/
RUN npm install
CMD npm run publish
EXPOSE 4000
