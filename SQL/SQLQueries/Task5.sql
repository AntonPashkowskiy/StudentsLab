USE TrainingDB
GO

DECLARE @SalaryMonth int = 1
DECLARE @SalaryYear int = 2015

SELECT e.Surname 
FROM Employee e 
WHERE e.Id IN 
(
	SELECT s.EmployeeId 
	FROM Salary s 
	WHERE s.Month = @SalaryMonth AND s.Year = @SalaryYear
)
GO