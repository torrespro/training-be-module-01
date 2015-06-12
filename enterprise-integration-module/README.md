1. Add a services folder at the root of exercises-environment with following pom.xml file

```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>exercises-environment</artifactId>
        <groupId>com.backbase.expert.training</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>

    <artifactId>services</artifactId>
    <packaging>pom</packaging>

    <modules>
        <module>YOUR COOL CAMEL MODULES HERE</module>
    </modules>

</project>
```

2. Copy the folder enterprise-integration-module inside the recently created services fodler.
Remember to rename the file backbase-mashup-service.xml to backbase-integration-service.xml and the internal routecontext id's to the proper integration package (com.backbase.portal.integration.service).

3. Make sure to change camel version in the pom.xml file under the enterprise-integration-module:
```
   <camel.version>2.12.4</camel.version>
```

4. Also make sure you add the module in the main pom.xml under services:

```
<module>enterprise-integration-module</module>
```

5. Add this file to the web.xml file inside the portal module
```
classpath:/META-INF/spring/backbase-integration-service.xml
```

6. You can find backbase.propertise on following path exercises-environment/configuration/src/main/resources
    Open this file and at the end of it add lines:
```    
    #Training Server Host
    training.server.host=${training.server.host}
    training.server.http.port=${training.server.http.port}
    training.server.mq.port=${training.server.mq.port}
```
    Open src/main/filters/local.properties and add
```
    training.server.host=localhost
    training.server.http.port=9999
    training.server.mq.port=61616
```
    Re-Compile exercises-environment/configuration  (mvn clean install)


7.  Add the login provider for the player management module to work to

    [Your CXP Root]/portal/src/main/resources/META-INF/spring/backbase-portal-business-security.xml


     <beans:bean id="playerAuthenticationProvider" class="com.backbase.expert.training.security.PlayerAuthenticationProvider"/>

8. Finally add the dependency in the pom.xml file of the portal module in order to include your routes when the portal is fired.

```
    <dependency>
        <groupId>com.backbase.expert.training</groupId>
        <artifactId>enterprise-integration-module</artifactId>
        <version>1.0-SNAPSHOT</version>
    </dependency>
```
Let's compile everything and fire up the portal to test our new routes:
inside services -> mvn clean install
inside portal -> mvn clean install jetty:run

test with:
http://localhost:7777/portalserver/services/rest/player/list
This should return an empty array { players: [] } in json format.

Congrats!