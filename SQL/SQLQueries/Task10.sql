USE TrainingDB
GO

SELECT Employee.Name
FROM 
(Employee 
JOIN 
(
	SELECT s.EmployeeId 
	FROM Salary s 
	WHERE s.Month = 1 AND s.Year = 2015 AND s.Salary > 1000
) AS JanuarySalary
ON Employee.Id = JanuarySalary.EmployeeId)
GO 