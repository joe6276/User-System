USE UsersData
select * from Projects

CREATE PROCEDURE getSpecificProject(@id INT)

AS
BEGIN
select * from Projects WHERE projectid=@id
END;
GO