DROP DATABASE IF EXISTS secureFileVault;
CREATE DATABASE secureFileVault;

USE secureFileVault;

CREATE TABLE users (
id BINARY(16) PRIMARY KEY NOT NULL,
name VARCHAR(50) NOT NULL,
lastName VARCHAR(50) NOT NULL,
phoneNumber VARCHAR(10) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
username VARCHAR(50) UNIQUE NOT NULL,
passwordHash varchar(255) NOT NULL,
isActive BOOLEAN DEFAULT TRUE,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE FileMetadata (
    id BINARY(16), 
    user_id BINARY(16),
    block_id VARCHAR(255),
    filename VARCHAR(255), 
    mimetype VARCHAR(255),
    size INT,
    url VARCHAR(255),
    isActive BOOLEAN DEFAULT TRUE,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
	PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES users(`id`) ON DELETE CASCADE 
);