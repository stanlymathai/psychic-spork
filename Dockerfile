# Use multi-stage build to separate build and production stages

# Build stage
FROM node:16 AS build
WORKDIR /usr/src/app

# Copy only the package.json and package-lock.json first to leverage Docker cache
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --verbose

# Production stage
FROM node:16
WORKDIR /usr/src/app

# Set environment variables

# app
ARG APP_ENV
ENV APP_ENV ${APP_ENV}

ARG APP_KEY
ENV APP_KEY ${APP_KEY}

ARG APP_PORT
ENV APP_PORT ${APP_PORT}

ARG API_ENDPOINT
ENV API_ENDPOINT ${API_ENDPOINT}

# database
ARG DB_NAME
ENV DB_NAME ${DB_NAME}

ARG DB_HOST
ENV DB_HOST ${DB_HOST}

ARG DB_USERNAME
ENV DB_USERNAME ${DB_USERNAME}

ARG DB_PASSWORD
ENV DB_PASSWORD ${DB_PASSWORD}

ARG DB_SOCKET_TIMEOUT
ENV DB_SOCKET_TIMEOUT ${DB_SOCKET_TIMEOUT}

ARG DB_CONNECTION_TIMEOUT
ENV DB_CONNECTION_TIMEOUT ${DB_CONNECTION_TIMEOUT}


# Copy node_modules from build stage
COPY --from=build /usr/src/app/node_modules ./node_modules

# Copy the rest of the application code
COPY . .

# Change ownership and permissions for the uploads directory and its content
# RUN chown -R node:node ./uploads && chmod -R 755 ./uploads

# Run as non-root user for security
USER node

# Expose the port the app runs on
EXPOSE 8080

# Add a health check command
HEALTHCHECK --interval=12s --timeout=12s --start-period=30s CMD node ./src/utils/healthCheck.util.js

CMD ["./bin/www"]