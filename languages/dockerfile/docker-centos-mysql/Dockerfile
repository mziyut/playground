FROM centos:6
MAINTAINER Yuta Mizui <y.mizui@icloud.com>
# install rmp
RUN rpm -Uvh http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
# install utility
RUN yum -y install bash-completion unzip curl wget git vim vim-common vim-enhanced
# install mysql
RUN yum install -y mysql mysql-server
RUN echo "NETWORKING=yes" > /etc/sysconfig/network
RUN sed -i -e"s/^bind-address\s*=\s*127.0.0.1/bind-address = 0.0.0.0/" /etc/mysql/my.cnf
# start mysqld
EXPOSE 3306
CMD ["/usr/bin/mysqld_safe"]
