FROM node:10-alpine

ARG USER=project79
ARG APP_PATH=/home/project79/app
ARG PORT=8080

RUN mkdir -p $APP_PATH/node_modules && chown -R $USER:$USER $APP_PATH

WORKDIR $APP_PATH

COPY package*.json ./

USER $USER

RUN npm install

COPY --chown=$USER:$USER . .

EXPOSE $PORT

CMD [ "node", "index.js" ]
