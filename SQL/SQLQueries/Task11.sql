USE TrainingDB
GO

SELECT 
	Employee.Name, 
	Employee.Surname, 
	ServiceRecord.JobName, 
	ServiceRecord.DepartamentId, 
	ServiceRecord.Experience 
FROM 
(Employee 
RIGHT JOIN
(
	SELECT 
		c.EmployeeId, 
		c.JobName, 
		c.DepartamentId, 
		DATEDIFF(YEAR, c.DateOfHiring, GETDATE()) AS Experience
	FROM Career c 
	WHERE c.DateOfDismissal IS NULL
	UNION
	SELECT 
		c.EmployeeId,
		c.JobName, 
		c.DepartamentId,
		DATEDIFF(YEAR, c.DateOfHiring, c.DateOfDismissal) 
	FROM Career c 
	WHERE NOT c.DateOfDismissal IS NULL
) AS ServiceRecord 
ON Employee.Id = ServiceRecord.EmployeeId)
GO