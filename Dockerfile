# Usar imagem base mínima do PHP com o servidor embutido do PHP
FROM php:8.1-alpine

# Instalar o Nginx
RUN apk update && apk add --no-cache nginx supervisor

# Configuração do PDO para banco de dados
RUN docker-php-ext-install pdo mysqli

# Copiar os arquivos do projeto para o container
COPY /api /var/www/html/api
COPY /front-end /usr/share/nginx/html
COPY . .
COPY nginx.conf /etc/nginx/nginx.conf

# Configurar permissões
RUN chown -R www-data:www-data /var/www/html /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Comando para rodar o PHP embutido na porta 9000 e o Nginx
CMD php -S 0.0.0.0:9000 -t /var/www/html/api & nginx -g 'daemon off;'