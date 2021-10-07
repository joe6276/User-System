use UsersData
select * FROM studentData

CREATE PROCEDURE UpdateUser(@id INT ,@firstname VARCHAR(100),@secondname VARCHAR(100),
 @email VARCHAR(100), @pass VARCHAR(20))

AS
BEGIN
 UPDATE studentData
SET firstname = @firstname, secondname=@secondname,email=@email,pass=@pass
WHERE id=@id
END