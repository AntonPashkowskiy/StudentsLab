USE TrainingDB
GO

SELECT 
	Departaments.Id AS DepartamentId,
	Departaments.Name AS DepartamentName,
	Stat.WorkersCount  
FROM
((
	SELECT d.Id, d.Name FROM Departament d
) AS Departaments
JOIN
(
	SELECT c.DepartamentId, COUNT(c.EmployeeId) AS WorkersCount  
	FROM Career c
	GROUP BY c.DepartamentId
) AS Stat 
ON Departaments.Id = Stat.DepartamentId)
GO