CREATE TABLE `nutrition` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usda_food_id` varchar(11) NOT NULL,
  `food_name` varchar(50) NOT NULL,
  `measure` int(10) NOT NULL DEFAULT '1',
  `energy` int(10) NOT NULL,
  `carb` decimal(5,3) NOT NULL,
  `protein` decimal(5,3) NOT NULL,
  `fat` decimal(5,3) NOT NULL,
  `water` decimal(5,3) NOT NULL,
  `sugar` decimal(5,3) NOT NULL,
  `fiber` decimal(5,3) NOT NULL,
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;
