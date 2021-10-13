USE UsersData
select * from studentData


CREATE PROCEDURE getUsers
AS
BEGIN
select * from studentData
END;
GO




ALTER PROCEDURE paginateUser
AS
DECLARE @PageNumber AS INT
DECLARE @RowsOfPage AS INT
DECLARE @MaxTablePage  AS FLOAT 
SET @PageNumber=1
SET @RowsOfPage=1
SELECT @MaxTablePage = COUNT(*) FROM studentData
SET @MaxTablePage = CEILING(@MaxTablePage/@RowsOfPage)
WHILE @MaxTablePage >= @PageNumber
BEGIN
select id,firstname ,secondname, email from  studentData 
  ORDER BY firstname 
  OFFSET (@PageNumber-1)*@RowsOfPage ROWS
  FETCH NEXT @RowsOfPage ROWS ONLY
	FOR JSON PATH, WITHOUT_ARRAY_WRAPPER
  SET @PageNumber = @PageNumber + 1

 
END;
GO
EXEC paginateUser


