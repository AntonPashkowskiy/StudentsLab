USE TrainingDB
GO

CREATE TABLE Job
(
	JobName nvarchar(255) NOT NULL PRIMARY KEY,
	MinimalSalary money NOT NULL
);