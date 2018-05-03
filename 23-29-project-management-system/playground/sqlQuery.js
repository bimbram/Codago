JOIN users ON members.userid=users.userid
let sqlQuery = `SELECT members.id, users.userid, users.firstname || ' ' || users.lastname AS name, users.role FROM members
JOIN projects ON members.projectid=projects.projectid
WHERE projects.projectid = ${req.params.id} `


``
let add = `ORDER BY users.userid`
