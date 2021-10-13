CREATE PROCEDURE deleteTask (@id INT )
AS
BEGIN
UPDATE Tasks  SET isdeleted = 1 WHERE taskid=@id 

END
GO
