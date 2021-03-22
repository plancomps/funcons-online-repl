FROM mhart/alpine-node AS node 

COPY . /tmp/project/

WORKDIR /tmp/project

RUN npm install
RUN npm run build

FROM nginx 
COPY --from=node /tmp/project/ /usr/share/nginx/html/


