DROP TABLE IF EXISTS `userInfo`;
CREATE TABLE `userInfo`(
    `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `username` VARCHAR(100) NOT NULL DEFAULT '',
    `email` VARCHAR(100) NOT NULL DEFAULT '',
    `password` VARCHAR(255) NOT NULL DEFAULT ''
);

INSERT INTO `userInfo` (username, email, password) VALUES
    ('Susie90', 'susie@test.com', '$2b$12$eFzMWbS9SogNtxkmo3J7aO8FQMFQSKbtpwLMIOVsF6GGKpTQdgq.W'),
    ('Harper_GR', 'harper@test.com', '$2b$12$WZcGPyrkCvD5e8m0Qz/nFOdBryUcsp6uDlE2MDo/AjuBhPrQBCfI6'),
    ('ArezF98', 'arez@test.com', '$2b$12$tiAz4eaXlpU.CdltUVvw6udLA2BWsitk5zXM2XOm2IpAeAiFfMCdy');
