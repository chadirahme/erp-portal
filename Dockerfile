FROM openjdk:8-jdk-alpine

MAINTAINER Chadi Rahme

VOLUME /tmp

# Add Spring Boot app.jar to Container
ADD "server.jar" app.jar

ENV JAVA_OPTS=""

# Fire up our Spring Boot app by default
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar" ]