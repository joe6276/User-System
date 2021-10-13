ALTER PROCEDURE getSpecificTask(@id INT)
AS
BEGIN
select  taskid,taskdescription,project,createdat,status,email from Tasks WHERE taskid=@id AND isdeleted=0
END;
GO


