import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import api.TasksApi

trait Routes extends TasksApi {
  val routes: Route = pathPrefix("api") {
    tasksApi
  } ~ path("")(getFromResource("public/index.html"))
}
