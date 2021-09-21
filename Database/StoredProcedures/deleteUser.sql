USE UsersData
select * from Projects


CREATE PROCEDURE deleteUser(@id INT)
AS
BEGIN
DELETE FROM studentData WHERE id=@id
END;
GO


