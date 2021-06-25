# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.183.0/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 16, 14, 12
FROM node:16-alpine

WORKDIR /task-docker

ENV PATH="./node_modules/.bin:$PATH"

COPY ./package*.json ./

RUN npm install

COPY ./ ./

RUN node node_modules/esbuild/install.js

CMD [ "npm", "run", "dev" ]
