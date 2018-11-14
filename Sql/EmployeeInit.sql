USE [plastic-cat]
GO
BEGIN TRAN
INSERT INTO [dbo].[Employee] ([Name], [Surname])
     VALUES ('Ivars', 'Krops')
SELECT * FROM Employee;
GO
ROLLBACK TRAN
--COMMIT TRAN

