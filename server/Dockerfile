FROM node:15 

COPY . /tmp/project/
WORKDIR /tmp/project

RUN apt-get update && apt-get -y install haskell-platform
RUN cabal update && cabal install funcons-tools

ENV FUNCONS_REPL /root/.cabal/bin/funcons-repl

WORKDIR /tmp/project
RUN npm install

CMD ["npm","start"]
