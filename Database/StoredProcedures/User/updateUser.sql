CREATE PROCEDURE UpdateUser(@id INT ,@firstname VARCHAR(100),@secondname VARCHAR(100),
 @email VARCHAR(100), @password  VARCHAR(20))

AS
BEGIN
 UPDATE studentData
SET firstname = @firstname, secondname=@secondname,email=@email,password=@password 
WHERE id=@id AND isdeleted=0
END