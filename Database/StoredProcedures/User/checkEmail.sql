CREATE PROCEDURE checkemail(@email VARCHAR(100))
AS
BEGIN
  select * FROM StudentData WHERE email =@email AND isdeleted= 0

END