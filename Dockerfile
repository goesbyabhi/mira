# Use the official SearxNG image as the base
FROM searxng/searxng:latest

# Set environment variables
ENV BASE_URL=http://localhost:42069/
ENV INSTANCE_NAME=mira-searxng

# Copy configuration files into the container
# (Assumes you have a "searxng" directory in your project)
COPY searxng /etc/searxng

# Expose the service port
EXPOSE 8080

# Default command to run SearxNG
CMD ["searx"]
