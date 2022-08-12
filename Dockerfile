FROM node:14

RUN mkdir -p app
WORKDIR app
COPY . .
RUN npm install
RUN npm run build
RUN npm run env
RUN npm ci --only=production

EXPOSE 8585:8585

CMD [ "npm", "run", "prod" ]