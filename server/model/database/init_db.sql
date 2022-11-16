DROP TABLE IF EXISTS `userInfo`;
CREATE TABLE `userInfo`(
    `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `username` VARCHAR(100) NOT NULL UNIQUE DEFAULT '',
    `email` VARCHAR(100) NOT NULL DEFAULT '',
    `password` VARCHAR(255) NOT NULL DEFAULT ''
);

INSERT INTO `userInfo` (username, email, password) VALUES
    ('Susie90', 'susie@test.com', 'pass1'),
    ('Harper_GR', 'harper@test.com', 'pass2'),
    ('ArezF98', 'arez@test.com', 'pass3');
