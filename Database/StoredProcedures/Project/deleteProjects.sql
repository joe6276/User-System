CREATE PROCEDURE deleteProject (@id INT)
AS
BEGIN
UPDATE Projects SET isdeleted=1 WHERE projectid=@id 
END;
GO


