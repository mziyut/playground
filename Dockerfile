FROM php:8-fpm

MAINTAINER Yuta Mizui <yuta-mizui@mziyut.com>

# php
RUN apt-get update && \
    apt-get install -y libfreetype6-dev libjpeg62-turbo-dev libpng12-dev libmcrypt-dev && \
    docker-php-ext-install pdo_mysql mysqli mbstring gd iconv mcrypt

# composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# phpunit
RUN curl -L https://phar.phpunit.de/phpunit.phar > /usr/local/bin/phpunit && \
    chmod +x /usr/local/bin/phpunit

# supervisor
RUN apt-get install -y supervisor

# gcc (for building git)
RUN apt-get install -y build-essential libssl-dev gettext curl expat openssl zlibc libcurl4-openssl-dev

# node, npm, gulp
RUN apt-get install -y nodejs npm && \
    npm cache clean && \
    npm install n -g && \
    n stable && \
    apt-get purge -y nodejs npm && \
    /usr/local/bin/npm install --global gulp-cli

RUN apt-get clean
