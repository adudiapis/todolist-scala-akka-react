package mappings

import models.Task
import spray.json.DefaultJsonProtocol

trait JsonMappings extends DefaultJsonProtocol {
  implicit val tasksFormat = jsonFormat3(Task)
}