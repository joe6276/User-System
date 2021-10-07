USE UsersData
select * FROM Projects

CREATE PROCEDURE addProject(@projectname VARCHAR(100),@projectduration VARCHAR(100),
 @email VARCHAR(100))
AS
BEGIN
INSERT INTO Projects
(projectname,projectduration,email)
VALUES ( @projectname,@projectduration,@email)
END
GO


