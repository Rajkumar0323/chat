-- CreateTable
CREATE TABLE [help_request] (
    [help_id] BIGINT NOT NULL IDENTITY(1,1),
    [description] VARCHAR(255) NULL,
    [latitude] FLOAT NOT NULL,
    [longitude] FLOAT NOT NULL,
    [seeker_id] INT NOT NULL,
    [timestamp] DATETIME NULL,
    [title] VARCHAR(255) NULL,

    PRIMARY KEY ([help_id])
);

-- CreateTable
CREATE TABLE [owners] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [name] TEXT NULL,
    [mobile] TEXT NULL,
    [email] TEXT NOT NULL,
    [address] TEXT NULL,
    [password] TEXT NULL,

    PRIMARY KEY ([id])
);

-- CreateTable

CREATE TABLE [visitors] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [owner_id] TEXT NULL,
    [image] TEXT NULL,
    [reason] TEXT NULL,
    [date] TEXT NULL,
    [permission] TEXT NULL,

    PRIMARY KEY ([id])
);
