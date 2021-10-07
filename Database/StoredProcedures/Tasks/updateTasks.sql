
use UsersData
select * from Tasks

CREATE PROCEDURE UpdateTasks(@id INT ,@taskdescription VARCHAR(100),@project VARCHAR(100),
 @createdat VARCHAR(100), @status VARCHAR(100), @email VARCHAR(100))

AS
BEGIN
 UPDATE Tasks
SET taskdescription = @taskdescription , project=@project, createdat =@createdat, status=@status, email=@email
WHERE taskid=@id
END
GO


