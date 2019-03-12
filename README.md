### ToDo List app with Scala,Akka HTTP API and ReactJS

Example of an Akka HTTP Backend and ReactJS frontend.

Project contains both frontend and backend.
Backend is built against MySQL DB. In order to run backend start MySQL service in your local.
Update your DB credentials in `application.conf` under `src/main/reources`.

```
database {
      url = "jdbc:mysql://localhost:3306/akka_react?useUnicode=true&characterEncoding=UTF-8"
      driver = "com.mysql.jdbc.Driver"
      user = "root"
      password = ""
      numThreads = 1
      maxConnections = 2
      minConnections = 1
      registerMbeans = true
  }
``` 
To start backend service:
```
$ sbt
> project backend
changes project to backend.
>run

```
Service should be up and running on `http://localhost:8086` if there are no database config issues.
Backend serves one API with GET,POST,PUT and DELETE methods to retrieve, create, update and delete a task.
API endpoints:

```
GET http://localhost:8086/api/tasks
POST http://localhost:8086/api/tasks
PUT http://localhost:8086/api/tasks/{taskId}
DELETE http://localhost:8086/api/tasks/{taskId}

```
Task model:
```
{
        "id": 1,
        "title": "Task title.",
        "description": "Task description."
}

```

Due to proxy settings I couldn't enable connectivity between Frontend and Backend.
But frontend built on ReactJS runs independently with dummy data.

To run Frontend:
```
$ cd frontend
$ npm install
$ yarn start or npm start
```
Service should be up and running on `http://localhost:3000`.

Frontend showcases the various reactive components used but functionally they are not integrated.


References:
1. https://github.com/mvanbrummen/movie-spoiler-app
2. https://github.com/akka/akka-http-quickstart-scala.g8
3. http://slick.lightbend.com/doc/3.0.0/gettingstarted.html
4. https://developer.lightbend.com/guides/akka-http-quickstart-scala/
5. Twitter Scala school https://twitter.github.io/scala_school/