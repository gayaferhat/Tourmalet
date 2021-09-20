FROM openjdk:8-jdk-alpine
MAINTAINER Ferhat BOUZEBOUDJA
VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]