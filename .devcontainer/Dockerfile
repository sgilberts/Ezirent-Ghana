FROM debian:bullseye-slim
ARG DEBIAN_FRONTEND=noninteractive
USER root

# Copy php.ini to /tmp
COPY php.ini /tmp

# Update apt and install curl
RUN apt-get update -yq && \
    apt-get install -yq \
    curl \
    git \
    imagemagick \
    nano \
    openssh-server \
    sqlite3 \
    wget \
    unzip

# Add PHP repository
RUN curl -sSL https://packages.sury.org/php/README.txt | bash -x && \
    apt-get update -yq

# Install PHP 8.2 and necessary extensions
RUN apt-get install -yq \
    php8.2-cli \
    php8.2-dev \
    php8.2-apcu \
    php8.2-curl \
    php8.2-gd \
    php8.2-imagick \
    php8.2-mbstring \
    php8.2-sqlite3 \
    php8.2-zip \
    php8.2-intl

# Configure PHP and PEAR
RUN pear config-set php_ini /etc/php/8.2/cli/php.ini && \
    pecl install xdebug && \
    cat /tmp/php.ini >> /etc/php/8.2/cli/php.ini

# Install NodeJS LTS
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash && \
    apt-get install -yq nodejs

# Install Composer
RUN wget https://getcomposer.org/installer && \
    php installer --install-dir=/usr/local/bin --filename=composer && \
    rm installer

# Clean up to reduce image size
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/*