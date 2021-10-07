USE [UsersData]
select * FROM Projects

CREATE PROCEDURE deleteProject (@id INT)
AS
BEGIN
DELETE FROM Projects WHERE projectid=@id
END;
GO


