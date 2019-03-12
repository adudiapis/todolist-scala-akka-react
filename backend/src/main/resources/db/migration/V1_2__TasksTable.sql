-- -----------------------------------------------------
-- Table `tasks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tasks`(
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(200) NOT NULL,
  `description` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id`))
  ENGINE = InnoDB;