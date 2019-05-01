# Get Node image from Docker Hub. Alpine is the lightweights distribution of Linux with only very basic functionalities, thus it's the most secure one.
FROM node:10.15.3-alpine

# Run Docker container as an unprivileged user (by default it's root).
#USER node

# Create application directory.
#RUN mkdir -p /usr/src/app
WORKDIR /home/node

# Install and cache application dependencies (for development).
COPY ["package.json", "npm-shrinkwrap.json", "./"]
#COPY package.json .
#COPY npm-shrinkwrap.json .
RUN npm install
RUN npm install -g @angular/cli

# After installing all dependencies copy the source code.
COPY . .

# Install application dependencies (for production).
# RUN npm ci --only=production

# Use port 4200 and 49153 to run locally the application.
EXPOSE 4200 49153
#EXPOSE 49153

#ENV NODE_ENV production

# Install global npm dependencies in the non-root user.
#ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

# Run the application, adding "--host 0.0.0.0 -poll" to "ng serve" update the start script to listen to all interfaces from the container.
#CMD ng serve --host 0.0.0.0 --poll
CMD ["npm", "start"]

# Start another stage, i.e. testing (not sure), deployment...
# For multi-stage Docker builds used to passing build-time variables during creating an image.
#ARG configuration=production

#RUN npm run build -- --output-path=/home/node/dist/out --configuration $configuration
# For now it doesn't preload on file change.
