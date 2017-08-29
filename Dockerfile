# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:7.8.0

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Copy all local files into the image.
RUN mkdir -p react-client
COPY . ./react-client

WORKDIR ./react-client

RUN yarn install

# Set the command to start the node server.
CMD yarn start --non-interactive

# Tell Docker about the port we'll run on.
EXPOSE 3000

# Run below to start development with docker
# docker run -p 3000:3000 -v /Volumes/Seagate/MRDN/Projects/microservices/react-client:/react-client react-client