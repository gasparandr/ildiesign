# Base image
FROM nginx

# Copy configs
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY website.conf /etc/nginx/conf.d/website.conf

# Expose ports
EXPOSE 80
EXPOSE 443

# Start command
CMD ["nginx", "-g", "daemon off;"]


