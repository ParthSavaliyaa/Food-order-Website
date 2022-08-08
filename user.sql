-
-- Database: `demo` and php web application user
CREATE DATABASE demo;
GRANT USAGE ON . TO 'root'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON demo.* TO 'root'@'localhost';
FLUSH PRIVILEGES;

USE demo;
--
-- Table structure for table `employees`
--

CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;