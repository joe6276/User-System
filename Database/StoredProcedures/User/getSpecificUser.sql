USE UsersData
select * from studentData


CREATE PROCEDURE getSpecificUser(@id INT)
AS
BEGIN
select * from studentData WHERE id=@id
END;
GO


