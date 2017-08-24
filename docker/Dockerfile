FROM ubuntu:16.04

WORKDIR ~/repo

# copy source code from build context
COPY . .

# Squash not available on docker cloud so everything is run in one command
# Install some dependencies
RUN apt-get update && \
  apt install -y --no-install-recommends wget curl && \
  curl -sL https://deb.nodesource.com/setup_7.x | bash - && \
  apt-get install -y nodejs && \
\
# Install Ionic global deps \
npm install -g ionic@3.9.2 cordova@7.0.1 && \
\
# Install clicker deps
npm install && \
\
# Install Chrome \
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list' && \
apt-get update && \
apt-get install -y --no-install-recommends google-chrome-stable && \
\
# Install Xvfb \
apt-get install -y xvfb && \
\
# Cleanup \
apt-get remove -y curl wget && \
  rm -rf /var/lib/apt/lists/* \

CMD ['echo', 'Done!']
