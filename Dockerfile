FROM nginx:alpine

# Copy static files
COPY index.html /usr/share/nginx/html/index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose Cloud Run default port
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
