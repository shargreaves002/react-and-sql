# MySQL commands
### User administration:
login:\
`mysql -u [username] -p`\
\
create user:\
`CREATE USER '[username]'@'[address]' IDENTIFIED BY '[password]';`\
\
see users:\
`SELECT user, host FROM mysql.user;`\
\
provide privileges to user:\
`GRANT ALL PRIVILEGES ON * . * TO '[username]'@'[address]';`\
then:\
`FLUSH PRIVILEGES;`\
\
check user privileges:\
`SHOW GRANTS FOR '[username]'@'[address]';`\
\
### Database commands:
create database:\
`CREATE DATABASE [dbname];`\
\
show all databases:\
`SHOW DATABASES;`\
\
select database:\
`USE [dbname];`\
\
delete database:\
`DROP DATABASE [dbname];`\
\
leave:\
`exit;`
### Table manipulation:
show tables:\
`SHOW TABLES;`\
\
create table:
```
CREATE TABLE [table name](
[column name] [data type] [column options],
...,
PRIMARY KEY ([primary column])
);
```
*column names use lowercase words seperated by underscores*\
\
delete table:\
`DROP TABLE [table];`\
\
add a column:
```
ALTER TABLE [table] ADD [column name] [data type];
*sets this value in all existing rows to null*
```
\
change a column:\
`ALTER TABLE [table] MODIFY COLUMN [column name] [data type];`\

### Table entries
add to a table:
```
INSERT INTO [table] ([column], [column], ...)
VALUES ([data], [data], ...);
```
*values must be in order, # of values must match # of columns*\
\
delete a row:\
`DELETE FROM [table] WHERE [column] = [value];`\
update a row:\
`UPDATE [table] SET [column] = [value] WHERE [column name] = [value];`\
*primary key is usually used for WHERE clause*\
\
order a selection:\
`SELECT * FROM [table] ORDER BY [column] [ASC]/[DESC];`\
\
concat results:\
`SELECT CONCAT([column], ' ', [column]) AS [display name] FROM [table];`\
\
select set of unique values in column:\
`SELECT DISTINCT [column] FROM [table];`\
\
range selection:\
`SELECT * FROM [table] WHERE [column] BETWEEN [val1] AND [val2];`\
\
select all rows where column matches given regex:\
`SELECT * FROM [table] WHERE [column] LIKE [regex];`\
*use NOT LIKE to find the opposite*\
\
Find rows with column that matches certain values:\
`SELECT * FROM [table] WHERE [column] IN([val1], [val2], ...);`\
Equivalent to:\
`SELECT * FROM [table] WHERE [column] = [val1] OR [column] = [val2] OR ...;`
\
\
Indexed columns help search the database faster. Primary keys are the most commonly indexed column, but you can add a custom index to another column if you're going to be searching it often.\
Add an index:\
`CREATE INDEX [index name] ON [table]( [ column ] );`\
\
remove index:\
`DROP INDEX [index] ON [table];`\
\
Foreign keys help your database connect rows from one table to rows on another table. These can be used to signify ownership of something listed in another table, such as how a person has an address, even though they might be kept in seperate tables.\
\
to specify during table creation:
```
CREATE TABLE [table2](
[column] [type] [options],
...,
FOREIGN KEY([column]) REFERENCES [table1]([column to reference])
);
```
\
To add to a column once the table is created:\
`ALTER TABLE [table] ADD FOREIGN KEY([column]) REFERENCES [table2].[column];`\
\
You can use joins to select data from multiple tables based on foreign keys. Inner joins match both tables, right joins select all from the right table and data from the left that matches (can give null responses if the right table has no corresponding values in the left table), and left joins do the same for the left table.\
\
```
SELECT [table1].[column], [table2].[column]
FROM [table1]
INNER JOIN [table 2] ON [table1].[foregin key column] = [table2].[foreign key column];
```
*you can have multiple joins to get data from 3 or more tables*

### Aggregate functions:
get total number of rows:\
`SELECT COUNT([column]) FROM [table];`\
\
max value (for number columns):\
`SELECT MAX([column]) FROM [table];`\
`MIN`, `SUM`, *and* `AVG` *are also commonly used*\
\
Transform to uppercase:\
`SELECT UCASE([column]) FROM [table];`\
`LCASE` *is for transforming to lowercase*
