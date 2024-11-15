FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/NaimixCodeHackathon-3.3.5.jar
WORKDIR /opt/app
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","app.jar"]

