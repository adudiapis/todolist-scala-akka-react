package dao

import models.{ Task, TaskId }
import slick.driver.MySQLDriver.api._
import scala.concurrent.Future

object TasksDao extends BaseDao {
  def findAll: Future[Seq[Task]] = tasksTable.result
  def findById(taskId: TaskId): Future[Task] = tasksTable.filter(_.id === taskId).result.head
  def create(task: Task): Future[TaskId] = tasksTable returning tasksTable.map(_.id) += task
  def update(newTask: Task, taskId: TaskId): Future[Int] = tasksTable.filter(_.id === taskId)
    .map(Task => (Task.title, Task.description))
    .update((newTask.title, newTask.description))

  def delete(taskId: TaskId): Future[Int] = tasksTable.filter(_.id === taskId).delete
}
