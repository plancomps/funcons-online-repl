FROM ltvanbinsbergen/funcons-tools:latest AS fct

FROM mhart/alpine-node AS node 

COPY --from=fct /usr/bin/funcons-repl /usr/bin/funcons-repl
COPY . /tmp/project/

WORKDIR /tmp/project

ENV FUNCONS_REPL /usr/bin/funcons-repl

RUN apk add --no-cache make gcc g++ python3

WORKDIR /tmp/project
RUN npm install

CMD ["npm","start"]

