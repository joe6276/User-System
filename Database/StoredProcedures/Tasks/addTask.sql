USE [UsersData]
select * FROM Tasks

CREATE PROCEDURE addTask
( @taskdescription VARCHAR(100),@project VARCHAR(100),
@createdat VARCHAR(100),@status VARCHAR(100), @email VARCHAR(100))
AS
BEGIN
INSERT INTO Tasks
(taskdescription,project,createdat,status,email)
VALUES ( @taskdescription,@project,@createdat,@status,@email )
END
GO


