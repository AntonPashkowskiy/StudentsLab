USE TrainingDB 
GO

SELECT AVG(s.Salary) AS AverageSalary 
FROM Salary AS s
WHERE s.Month = 1 AND s.Year = 2015
GO