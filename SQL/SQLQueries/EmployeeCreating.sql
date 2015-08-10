USE TrainingDB
GO

CREATE TABLE Employee
(
	Id int NOT NULL PRIMARY KEY IDENTITY(1, 1),
	Name nvarchar(255) NOT NULL,
	Surname nvarchar(255) NOT NULL,
	DateOfBirth datetime NOT NULL
);