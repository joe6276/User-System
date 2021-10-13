CREATE  PROCEDURE addTask
( @taskdescription VARCHAR(100),@project VARCHAR(100), @email VARCHAR(100))
AS
BEGIN
INSERT INTO Tasks
(taskdescription,project,createdat,status,email)
VALUES ( @taskdescription,@project, CAST(GETDATE() AS DATE) ,'created',@email )
END
GO


