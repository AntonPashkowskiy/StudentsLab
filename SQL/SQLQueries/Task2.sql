USE TrainingDB
GO

SELECT (Job.JobName) 
FROM Job 
WHERE Job.MinimalSalary <= 500
GO 