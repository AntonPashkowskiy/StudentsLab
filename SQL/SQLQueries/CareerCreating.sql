USE TrainingDB
GO

CREATE TABLE Career
(
	EmployeeId int NOT NULL FOREIGN KEY REFERENCES Employee(Id),  
	JobName nvarchar(255) NOT NULL FOREIGN KEY REFERENCES Job(JobName),
	DepartamentId int NOT NULL FOREIGN KEY REFERENCES Departament(Id), 
	DateOfHiring datetime,
	DateOfDismissal datetime
);