# We use multi-stage builds to reduce the size of the image in production and
# to avoid installing unnecessary dependencies in the production image.
# See: https://docs.docker.com/develop/develop-images/multistage-build/

#######################
#  Development stage  #
#######################

FROM node:20.5.0-buster-slim AS development

ARG NODE_ENV

ENV NODE_ENV=${NODE_ENV} \
  # Nuxt:
  NUXT_HOST=0.0.0.0 \
  NUXT_PORT=3000

SHELL [ "/bin/bash", "-eo", "pipefail", "-c" ]

# Install system dependencies:
RUN apt-get update \
  && apt-get upgrade -y \
  && apt-get install -y --no-install-recommends \
    bash \
    git \
  # Cleaning cache:
  && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false \
  && apt-get clean -y && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --chown=node:node ./yarn.lock ./package.json /app/

RUN echo "${NODE_ENV}" \
  && yarn install --frozen-lockfile \
  && chown node:node -R '/app'


USER node


######################
#  Production stage  #
######################

FROM development AS production

COPY --chown=node:node . /app
