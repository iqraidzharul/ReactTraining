FROM telkomindonesia/alpine:nodejs-8.9.3 as builder
LABEL maintainer="Dimas Restu Hidayanto <dimas@playcourt.id>"


# Set Working Directory Under Repository Directory
WORKDIR /usr/src/app

RUN mkdir /.pm2 \
    && chmod -R 777 /.pm2

# Update Some Package
RUN apk add --update --no-cache --virtual .build-dev build-base postgresql-client python python-dev

# Copy all file inside repository to Working Directory
COPY . .

# install required package 
#   If your apps having bycypt please add this command before "&& apl del .build-dev"
#   > && npm rebuild bcrypt --build-from-source
RUN npm i -g npm \
    && npm i -g node-gyp \
    && npm i

CMD  npm run build:${NODE_ENV}
