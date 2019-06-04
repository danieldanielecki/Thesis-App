# TODO: production mode has to be tested.
# Get Node image from Docker Hub. Alpine is the lightweights distribution of Linux with only very basic functionalities, thus it's the most secure one.
FROM node:10.15.3-alpine

# Run Docker container as an unprivileged user (by default it's root).
USER node

# Install global npm dependencies in the non-root user.
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

# Create application directory.
WORKDIR /home/node

# Copy application dependencies before copying code into the container. Due to that reason Docker will cache installed node_modules as a separate layer, i.e. if package.json will not change node_modules will be note installed again (it'll be cached).
COPY ["package.json", "npm-shrinkwrap.json", "./"]

# Install all dependencies.
RUN npm install

# Install only dependencies required for production.
#RUN npm install --only=prod

# After installing all dependencies copy the source code into a container.
COPY . .

# Expose necessary ports for development with live preload.
EXPOSE 4200 49153

# Run the application, adding "--host 0.0.0.0 -poll 1" to "ng serve" is required to update the start script to listen to all interfaces from the container.
CMD ["npm", "run", "start"]
# Bundle for production.
#CMD ["npm", "run", "build"]
