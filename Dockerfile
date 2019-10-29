FROM nginx

COPY index.html /usr/share/nginx/html
COPY register.html /usr/share/nginx/html
COPY ./styles /usr/share/nginx/html/styles
COPY ./scripts /usr/share/nginx/html/scripts
COPY ./img /usr/share/nginx/html/img