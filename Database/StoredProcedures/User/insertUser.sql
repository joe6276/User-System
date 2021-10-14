CREATE PROCEDURE insertUser (@firstname VARCHAR(100),@secondname VARCHAR(100),
 @email VARCHAR(100), @pass VARCHAR(20))
AS
BEGIN
INSERT INTO studentData
(firstname,secondname,email,pass)
VALUES ( @firstname,@secondname,@email,@pass)
END



