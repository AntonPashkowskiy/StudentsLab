USE TrainingDB
GO

CREATE TABLE Departament
(
	Id int NOT NULL PRIMARY KEY IDENTITY(1, 1),
	Name nvarchar(255) NOT NULL UNIQUE,
	DepartamentAdress nvarchar(255),
);