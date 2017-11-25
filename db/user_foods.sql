CREATE TABLE `user_foods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `food_id` varchar(11) NOT NULL,
  `food_name` varchar(50) DEFAULT NULL,
  `meal_id` int(2) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `unit` varchar(10) DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
