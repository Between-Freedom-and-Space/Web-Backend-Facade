FROM node:18-alpine

ARG APP_DIR=app

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

