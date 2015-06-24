# Backbase Training Exercises

## Portal Backend - Module 1: Enterprise Integration Module

This exercise is part of [Module 1: Enterprise Integration](https://github.com/Backbase/training-be-module-01/tree/code-migration)

### Prerequisites

You need to get a training server up and running before performing this excerise.
Follow the instructions that can be found here [training-server](https://github.com/Backbase/training-server/tree/code-migration)

### Installation & Configuration

You are now going to integrate the camel module for this excercise with your portal.
This would be done in four steps 

- Copy the **enterprise-integration-module** folder into the **services** folder of your Launchpad 0.12.x project.

- Make sure you included the module in **services/pom.xml**. Add the following in the `<modules>` section:

  ```xml
  <module>enterprise-integration-module</module>
  ```
  
  Re-compile services by executing `mvn clean install`` in the **services** folder.

- Set up portal properties to point to the training server. You can find **backbase.properties** in the following path **configuration/src/main/resources**. Open this file and add the following lines:

  ```    
  #Training Server Host
  training.server.host=${training.server.host}
  training.server.http.port=${training.server.http.port}
  training.server.mq.port=${training.server.mq.port}
  ```

  Open **configuration/src/main/filters/local.properties** and add

  ```
  #Training Server Host
  training.server.host=localhost
  training.server.http.port=9999
  training.server.mq.port=61616
  ```

  Re-compile configuration by executing `mvn clean package` in the **configuration** folder.

- Configure portal project to include the enterprise-integration-module as a dependency. Add the dependency in **portal/pom.xml** in order to include your routes when the portal is fired.

  ```xml
      <dependency>
          <groupId>com.backbase.expert.training</groupId>
          <artifactId>enterprise-integration-module</artifactId>
          <version>1.0-SNAPSHOT</version>
      </dependency>
  ```

- Configure the **enterprise-integration-module** login provider with the portal security setup.

  Open **portal/src/main/resources/META-INF/spring/backbase-portal-business-security.xml** and add the login provider for the player management module:

  ```xml
  <beans:bean id="playerAuthenticationProvider"
              class="com.backbase.expert.training.security.PlayerAuthenticationProvider"/> 
  ```

  Finally, include

  ```xml
  <authentication-provider ref="playerAuthenticationProvider" />
  ```

  within the `<authentication-manager>` block.

### Build and Run

Let's compile everything and fire up the portal to test our new routes. In the **portal** folder, execute:

     mvn clean jetty:run

Test with:

     http://localhost:7777/portalserver/services/rest/player/list

This should return an empty array `{ players: [] }` in json format.
