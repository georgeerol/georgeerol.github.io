FROM ruby:3.3-bookworm

ENV BUNDLE_PATH=/bundle \
    BUNDLE_BIN=/bundle/bin \
    GEM_HOME=/bundle \
    PATH=/bundle/bin:$PATH \
    BUNDLE_JOBS=4 \
    BUNDLE_GEMFILE=/app/Gemfile

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential git \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY Gemfile.docker Gemfile
RUN bundle install

WORKDIR /site
EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--livereload", "--host", "0.0.0.0"]

