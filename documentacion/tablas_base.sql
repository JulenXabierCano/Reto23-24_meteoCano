CREATE TABLE `oauth_clients` (
    `user_id` VARCHAR(255),
    `name` VARCHAR(255),
    `secret` VARCHAR(255),
    `provider` VARCHAR(255),
    `redirect` VARCHAR(255),
    `personal_access_client` INT,
    `password_client` INT,
    `revoked` INT,
    `id` VARCHAR(36),
    `updated_at` TIMESTAMP,
    `created_at` TIMESTAMP
);

CREATE TABLE `oauth_personal_access_clients` (
    `client_id` VARCHAR(255),
    `updated_at` TIMESTAMP,
    `created_at` TIMESTAMP
);