CREATE PROCEDURE getSpecificProject(@id INT)

AS
BEGIN
select projectname,projectduration,email from Projects WHERE projectid=@id AND isdeleted=0
END;
