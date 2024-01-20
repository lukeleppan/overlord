# Start from a Node.js image
FROM node:latest

# Set the working directory in the Docker container
WORKDIR /app

RUN npm install -g @angular/cli

# Copy package.json and package-lock.json (if available)
COPY package*.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the application's source code
COPY . /app

# Expose the port the app runs on
EXPOSE 4200

# Start the app
CMD ["ng", "serve", "--host", "0.0.0.0"]