FROM node:18-alpine as prod_image

WORKDIR /opt
COPY . .

# Описание флагов: https://docs.npmjs.com/cli/install
# CI: https://docs.npmjs.com/cli/ci.html
RUN npm ci --no-audit --no-optional --ignore-scripts --prefer-offline --cache .npm
RUN npm run build

# приложение
EXPOSE 3000

CMD ["node", "build/server.js"]
