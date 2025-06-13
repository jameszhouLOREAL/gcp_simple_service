# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Start the application
CMD ["node", "server.js"]
