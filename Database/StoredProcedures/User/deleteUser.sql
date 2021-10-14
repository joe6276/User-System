CREATE PROCEDURE deleteUser(@id INT)
AS
BEGIN
UPDATE studentData SET isdeleted=1

WHERE id=@id
END;



