USE TrainingDB
GO

SELECT s.EmployeeId, AVG(s.Salary) 
FROM Salary s
GROUP BY s.EmployeeId
GO