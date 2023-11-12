# Build stage
FROM node:18-alpine AS build
WORKDIR /app

# Install all dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy application files
COPY . .

# Build the application
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Runner stage
FROM node:18-alpine AS runner
WORKDIR /app

# Environment variables
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV HOST 0.0.0.0
ENV PORT 3000

# Add non-root user
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Copy necessary files from build stage
COPY --from=build --chown=nextjs:nextjs /app/public ./public
COPY --from=build --chown=nextjs:nextjs /app/.next ./.next
COPY --from=build --chown=nextjs:nextjs /app/node_modules ./node_modules
COPY --from=build --chown=nextjs:nextjs /app/package.json ./package.json
COPY --from=build --chown=nextjs:nextjs /app/package-lock.json ./package-lock.json

# Switch to non-root user
USER nextjs

# Expose the listening port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
