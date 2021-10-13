
CREATE PROCEDURE UpdateTasks(@id INT ,@taskdescription VARCHAR(100),@project VARCHAR(100),
 @email VARCHAR(100))

AS
BEGIN
 UPDATE Tasks
SET taskdescription = @taskdescription , project=@project, createdat =CAST(GETDATE() AS DATE), status='created', email=@email
WHERE taskid=@id AND isdeleted =0
END
GO


