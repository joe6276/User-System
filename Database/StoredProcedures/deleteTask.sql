use UsersData
select * from Tasks

CREATE PROCEDURE deleteTask(@id INT )

AS
BEGIN

DELETE FROM Tasks WHERE taskid=@id

END
GO