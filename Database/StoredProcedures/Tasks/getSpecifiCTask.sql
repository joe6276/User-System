USE UsersData
select * FROM Tasks

CREATE PROCEDURE getSpecificTask(@id INT)
AS
BEGIN
select * from Tasks WHERE taskid=@id
END;
GO


