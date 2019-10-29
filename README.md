# Bibliographer
System do zarządzania bibliografią

Aby uruchomić stronę, należy wejść do kkatalogu "Projekt", w którym znajduje się plik Dockerfile. Następnie wpisujemy komendę:
> docker run --name skalisz --rm -p80:80 -v $(pwd)/:/usr/share/nginx/html:ro -d nginx
.
