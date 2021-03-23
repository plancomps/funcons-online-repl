FROM node:15 

COPY . /tmp/project/
WORKDIR /tmp/project

RUN apt-get update && apt-get -y install haskell-platform
RUN git clone https://github.com/plancomps/funcons-tools.git
WORKDIR /tmp/project/funcons-tools/
RUN cabal update && cabal install

ENV FUNCONS_REPL /root/.cabal/bin/funcons-repl

WORKDIR /tmp/project
RUN npm install

CMD ["npm","start"]
