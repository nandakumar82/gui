FROM alpine

# add confd
ADD confd-0.11.0-linux-amd64 /usr/local/bin/confd
RUN chmod +x /usr/local/bin/confd

# add confd configs
RUN mkdir -p /etc/confd/
COPY confd /etc/confd

# create nginx config directories
RUN mkdir -p /etc/nginx/

# copy application files from dist to nginx root directory
COPY dist /srv/nginx/angular2-webapp

# copy scripts and harden system
COPY bin /usr/local/sbin
RUN /usr/local/sbin/harden.sh

# make configs writable by user
RUN chown -R user:user /tmp
RUN chown -R user:user /etc/nginx/

# declare volume
VOLUME /etc/nginx
VOLUME /srv/nginx/angular2-webapp

# run container as user
User user
CMD ["/bin/sh", "/usr/local/sbin/run.sh"]
