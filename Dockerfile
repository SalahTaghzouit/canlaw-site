FROM node:7.5

#####################################
# Non-Root User:
#####################################
# Add a non-root user to prevent files being created with root permissions on host machine.
ARG PUID=1020
ARG PGID=1020
RUN groupadd -g $PGID canlaw && \
    useradd -u $PUID -g canlaw -m canlaw

#####################################
# Project files:
#####################################
ENV PROJECT /project
COPY . $PROJECT
WORKDIR $PROJECT

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install yarn && rm -rf /var/lib/apt/lists/*

#####################################
# Build:
#####################################
ARG ID_RSA_URL
ARG LOCAL_APP_URL
ARG CDN_URL
ARG BASE_URL_PATH
ARG WEBSITE_URL
ARG BLOG_URL
ARG DASHBOARD_URL
ARG LOGIN_URL
ARG REGISTER_URL
ARG ALGOLIA_APP_ID
ARG ALGOLIA_API_KEY
ARG GOOGLE_MAPS_API_KEY

ENV DEPENDENCIES automake zlib1g-dev nasm autoconf nasm build-essential
RUN wget -O /tmp/id_rsa $ID_RSA_URL && \
    chmod 600 /tmp/id_rsa && \
    eval $(ssh-agent) && \
    ssh-add /tmp/id_rsa && \
    mkdir /root/.ssh && \
    ssh-keyscan -t rsa github.com > /root/.ssh/known_hosts && \
    apt-get update && apt-get -y install $DEPENDENCIES --no-install-recommends && \
    yarn --verbose && yarn build:clean && \
    rm -rf stats.json && rm -rf ./coverage && \
    apt-get purge -y --auto-remove $DEPENDENCIES && \
    rm -rf /var/lib/apt/lists/* && \
    rm -rf $PROJECT/.git && \
    yarn cache clean && rm -rf /home/canlaw/.yarn/*

#####################################
# Permissions:
#####################################
RUN chown -R canlaw:canlaw $PROJECT && \
    mkdir -p /home/canlaw/.yarn && \
    chown -R canlaw:canlaw /home/canlaw

USER canlaw

EXPOSE 3000

ENTRYPOINT ["/usr/bin/yarn"]
CMD ["start:prod"]