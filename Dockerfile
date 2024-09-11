# Usar imagem base mínima do PHP com o servidor embutido do PHP
FROM php:8.1-cli

# Instalar o Nginx
RUN apk update && apk add --no-cache nginx supervisor

# Copiar os arquivos do projeto para o container
COPY ./api /var/www/html/api
COPY ./front-end /var/www/html/front

# Configurar permissões
RUN chown -R www-data:www-data /var/www/html

# Configurar o Nginx para servir o front-end e repassar as requisições para a API no servidor embutido do PHP
RUN echo "server { \
    listen 80; \
    root /var/www/html/front; \
    index index.html; \
    server_name localhost; \
    location / { \
        try_files \$uri \$uri/ =404; \
    } \
    location /api/ { \
        fastcgi_pass 127.0.0.1:9000; \
        fastcgi_index index.php; \
        include fastcgi_params; \
        fastcgi_param SCRIPT_FILENAME /var/www/html/\$fastcgi_script_name; \
    } \
}" > /etc/nginx/conf.d/default.conf

# Expor a porta 80
EXPOSE 80

# Comando para rodar o PHP embutido na porta 9000 e o Nginx
CMD php -S 0.0.0.0:9000 -t /var/www/html/api & nginx -g 'daemon off;'