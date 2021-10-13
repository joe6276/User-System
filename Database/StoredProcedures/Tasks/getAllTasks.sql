CREATE  PROCEDURE [dbo].[getTask]
AS
BEGIN
select taskid,taskdescription,project,createdat,status,email from Tasks WHERE isdeleted=0
END
GO


