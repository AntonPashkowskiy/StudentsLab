USE TrainingDB
GO

SELECT MaySalary.EmployeeId FROM 
((
	SELECT s.EmployeeId, s.Salary 
	FROM Salary s
	WHERE s.Month = 5 AND s.Year = 2015
) AS MaySalary 
INNER JOIN
(
	SELECT s.EmployeeId, MAX(s.Salary) AS MaxSalary 
	FROM Salary s
	WHERE s.Month < 5 AND s.Year = 2015
	GROUP BY s.EmployeeId
) AS MaxSalaryBefore 
ON MaySalary.EmployeeId = MaxSalaryBefore.EmployeeId)
WHERE Salary < MaxSalary
GO