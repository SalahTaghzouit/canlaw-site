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

#####################################
# Build:
#####################################
ARG ID_RSA_URL
ARG DASHBOARD_URL
ARG PREFIX_PATH
ARG APP_URL
ARG API_URL
ARG BLOG_URL
ARG LOGIN_URL
ARG REGISTER_URL
ARG ALGOLIA_APP_ID
ARG ALGOLIA_API_KEY
ARG ALGOLIA_CATEGORY_INDEX


ENV TRANSIENT automake zlib1g-dev nasm autoconf nasm build-essential
ENV DEPENDENCIES yarn $TRANSIENT
RUN wget -O /tmp/id_rsa $ID_RSA_URL && \
    chmod 600 /tmp/id_rsa && \
    eval $(ssh-agent) && \
    ssh-add /tmp/id_rsa && \
    mkdir /root/.ssh && \
    ssh-keyscan -t rsa github.com > /root/.ssh/known_hosts && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get -y install $DEPENDENCIES --no-install-recommends && \
    yarn --verbose && yarn run build:clean && \
    NODE_ENV=production ./node_modules/.bin/webpack \
        --config ./internals/webpack/webpack.prod.babel.js --color -p --progress && \
    yarn install --production --ignore-scripts --prefer-offline && \
    rm -f stats.json && rm -rf ./coverage && \
    apt-get purge -y --auto-remove $TRANSIENT && \
    rm -rf /var/lib/apt/lists/*

#####################################
# Permissions:
#####################################
RUN chown -R canlaw:canlaw $PROJECT && \
    mkdir -p /home/canlaw/.yarn && \
    chown -R canlaw:canlaw /home/canlaw

USER canlaw

EXPOSE 3000

ENTRYPOINT ["/usr/bin/yarn", "run"]
CMD ["start:prod"]