CREATE PROCEDURE paginateProject
AS
DECLARE @PageNumber AS INT
DECLARE @RowsOfPage AS INT
DECLARE @MaxTablePage  AS FLOAT 
SET @PageNumber=1
SET @RowsOfPage=1
SELECT @MaxTablePage = COUNT(*) FROM Projects
SET @MaxTablePage = CEILING(@MaxTablePage/@RowsOfPage)
WHILE @MaxTablePage >= @PageNumber
BEGIN
select projectid,projectname, projectduration,email from Projects
  ORDER BY projectid
  OFFSET (@PageNumber-1)*@RowsOfPage ROWS
  FETCH NEXT @RowsOfPage ROWS ONLY
	FOR JSON PATH, WITHOUT_ARRAY_WRAPPER
  SET @PageNumber = @PageNumber + 1

 
END;

