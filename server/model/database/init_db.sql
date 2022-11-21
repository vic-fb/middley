DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`(
    `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `username` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `home` VARCHAR(255) NOT NULL DEFAULT '',
    `work` VARCHAR(255) NOT NULL DEFAULT ''
);

INSERT INTO `users` (username, email, password, home, work) VALUES
    ('Susie90', 'susie@test.com', '$2b$12$eFzMWbS9SogNtxkmo3J7aO8FQMFQSKbtpwLMIOVsF6GGKpTQdgq.W', "Carrer de Valencia 200, Barcelona", "Carrer d'en Grassot, 101, 08025 Barcelona"),
    ('Harper_GR', 'harper@test.com', '$2b$12$WZcGPyrkCvD5e8m0Qz/nFOdBryUcsp6uDlE2MDo/AjuBhPrQBCfI6', '', ''),
    ('ArezF98', 'arez@test.com', '$2b$12$tiAz4eaXlpU.CdltUVvw6udLA2BWsitk5zXM2XOm2IpAeAiFfMCdy', '', '');
