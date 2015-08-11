USE TrainingDB
GO

INSERT INTO Salary(EmployeeId, Month, Year,Salary)
VALUES
(2, 1, 2015, 1500),
(3, 1, 2015, 500),
(4, 1, 2015, 1100),
(5, 1, 2015, 1200),
(6, 1, 2015, 900),
(7, 1, 2015, 800),
(8, 1, 2015, 700),
(9, 1, 2015, 1020),
(10, 1, 2015, 1600),
(11, 1, 2015, 1800),
(12, 1, 2015, 1120),
(11, 3, 2015, 2100),
(2, 3, 2015, 1000),
(3, 3, 2015, 800),
(4, 3, 2015, 200),
(5, 3, 2015, 1100),
(6, 3, 2015, 1000),
(7, 3, 2015, 700),
(12, 3, 2014, 700),
(11, 3, 2014, 700),
(2, 3, 2014, 700),
(3, 3, 2014, 700),
(11, 5, 2015, 2100),
(2, 5, 2015, 1000),
(3, 5, 2015, 800),
(4, 5, 2015, 200),
(5, 5, 2015, 1100),
(6, 5, 2015, 1000),
(7, 5, 2015, 700),
(12, 5, 2014, 700),
(11, 5, 2014, 700),
(2, 5, 2014, 700),
(3, 5, 2014, 700);
GO

INSERT INTO Career(EmployeeId, JobName, DepartamentId, DateOfHiring, DateOfDismissal)
VALUES
(2, 'Director', 1, '02/03/1994', NULL),
(3, 'HR', 2, '02/03/1992', NULL),
(4, 'HR', 3, '02/03/1993', NULL),
(5, 'Manager', 4, '02/03/1993', NULL),
(6, 'Director', 2, '02/03/1993', NULL),
(7, 'Programmer', 5, '02/03/1991', NULL),
(8, 'Manager', 6, '02/03/1990', NULL),
(9, 'Director', 7, '02/03/1992', NULL),
(10, 'QA worker', 7, '02/03/1991', NULL),
(11, 'QA worker', 4, '02/03/1980', NULL),
(12, 'Programmer', 3, '02/03/1993', '05/02/2005');
GO

INSERT INTO Job(JobName, MinimalSalary)
VALUES
('Director', 3000),
('Manager', 1000),
('HR', 900),
('Programmer', 1500),
('QA worker', 1100),
('Cleaner', 400),
('Electric', 500);
GO

INSERT INTO Employee(Name, Surname, DateOfBirth)
VALUES
('Anton', 'Pashkouski', '05/02/1996'),
('Valerii', 'Nalivauko', '02/03/1994'),
('Nikolai', 'Vores', '02/03/1980'),
('Victor', 'Makoed', '11/03/1998'),
('Dmitrii', 'Pendo', '02/03/1978'),
('Anton', 'Lipskii', '01/03/1988'),
('Anatoliy', 'Karal', '02/03/1989'),
('Dmitrii', 'Vert', '03/03/1990'),
('Vasilii', 'Urban', '04/03/1995'),
('Nikolai', 'Gesse', '05/03/1991'),
('Ivan', 'Vort', '06/03/1992');
GO

INSERT INTO Departament(Name, DepartamentAdress)
VALUES 
('D1', 'Tolstogo 14'),
('D2', 'Tolstogo 14'),
('D3', 'Tolstogo 14'),
('D4', 'Tolstogo 14'),
('D5', 'Tolstogo 14'),
('D6', 'Tolstogo 14'),
('DQA', 'Tolstogo 14');
GO