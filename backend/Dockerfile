FROM python:3.6

ENV APP_PATH=/app

RUN apt-get update && apt-get install -y  \
  python-dev \
  libaio-dev \
  build-essential \
  vim \
  expect \
  telnet \
  ftp \
  libcfitsio-bin \
  && rm -rf /var/lib/apt/lists/*

# Install python-ldap dependencies
RUN apt-get update && apt-get install libsasl2-dev libldap2-dev libssl-dev -y

RUN mkdir $APP_PATH

WORKDIR $APP_PATH

ADD requirements.txt $APP_PATH

RUN pip install --upgrade pip

# Lint
RUN pip install --upgrade pip
RUN pip install flake8
COPY . /usr/src/app/
RUN flake8 --ignore=E501,F401 .

RUN pip install -r requirements.txt

COPY . $APP_PATH

WORKDIR $APP_PATH
ENTRYPOINT $APP_PATH/entrypoint.sh