# Backbase Training Exercises

### Installation & Configuration

You are now going to integrate the camel module for this excercise with your portal.
This would be done in four steps 

- Copy the folder **enterprise-integration-module** inside the **services** folder of your portal project.

- Make sure you included the module in the **pom.xml** file of the **services** folder:

  ```xml
  <module>enterprise-integration-module</module>
  ```

- Set up portal properties to point to the training server. You can find **backbase.properties** on the following path **exercises-environment/configuration/src/main/resources**. Open this file and add the following lines:

  ```    
  #Training Server Host
  training.server.host=${training.server.host}
  training.server.http.port=${training.server.http.port}
  training.server.mq.port=${training.server.mq.port}
  ```

  Open src/main/filters/local.properties and add

  ```
  #Training Server Host
  training.server.host=localhost
  training.server.http.port=9999
  training.server.mq.port=61616
  ```

  Re-compile configuration by executing the following command in the **configuration** folder:

  ```
  mvn clean package
  ```

- Configure portal project to include the enterprise-integration-module as a dependency. Add the dependency in the **pom.xml** file of the **portal** module in order to include your routes when the portal is fired.

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

- Build and Run

  Let's compile everything and fire up the portal to test our new routes:

       inside services -> mvn clean install
       inside portal -> mvn clean jetty:run

  Test with:

       http://localhost:7777/portalserver/services/rest/player/list

  This should return an empty array `{ players: [] }` in json format.

  Congrats!
