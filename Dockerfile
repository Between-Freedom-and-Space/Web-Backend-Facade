FROM node:18-alpine

ARG APP_DIR=app
ARG MONO_BACKEND_URL="http://localhost:8080"
ARG MODE=production
ARG PORT=8585

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}
COPY . .
RUN npm install
RUN npm run build

ENV PORT=${PORT}
ENV MONO_BACKEND_URL=${MONO_BACKEND_URL}
ENV MODE=${MODE}

RUN npm run env
RUN npm ci --only=production

EXPOSE 8585:8585

CMD [ "npm", "run", "prod" ]