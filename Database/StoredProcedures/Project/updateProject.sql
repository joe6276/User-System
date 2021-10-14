CREATE PROCEDURE UpdateProject(@id INT ,@projectname VARCHAR(100),@projectduration VARCHAR(100),
 @email VARCHAR(100))

AS
BEGIN
 UPDATE Projects
SET projectname = @projectname, projectduration=@projectduration,email=@email
WHERE projectid=@id AND isdeleted=0
END



