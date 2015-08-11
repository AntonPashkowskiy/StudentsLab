USE TrainingDB
GO

SELECT employee.Name, DATEDIFF(YEAR, employee.DateOfBirth, GETDATE()) as Years 
FROM (
	SELECT TOP(1) * 
	FROM Employee e 
	WHERE e.DateOfBirth IN 
	(
		SELECT MIN(Employee.DateOfBirth) 
		FROM Employee
	)
) AS employee 
GO