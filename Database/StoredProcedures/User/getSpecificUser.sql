CREATE PROCEDURE getSpecificUser(@id INT)
AS
BEGIN
select id,firstname ,secondname, email from studentData WHERE id=@id AND  isdeleted=0
END;



