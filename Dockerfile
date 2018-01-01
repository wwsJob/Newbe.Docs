FROM starefossen/github-pages

RUN echo "http://mirrors.aliyun.com/alpine/v3.4/main/" > /etc/apk/repositories

RUN gem install --verbose --no-document jekyll-minifier
