FROM ruby:2.7

RUN apt-get update && \
    apt-get install -y \
    libicu-dev \
    cmake

WORKDIR /app

COPY Gemfile* /app

RUN bundle install

RUN git init
COPY config.ru /app

CMD ["bundle", "exec", "rackup", "config.ru", "-d"]
