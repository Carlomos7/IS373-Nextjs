# Use a Node.js image suitable for development
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install development and production dependencies
RUN npm update

RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Expose the port that your Next.js app will run on (adjust if needed)
EXPOSE 3000

# Start your Next.js app in development mode
CMD ["npm", "run", "dev"]
