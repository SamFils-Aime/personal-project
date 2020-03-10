SELECT  compliment ,  u.username 
    FROM compliment c inner JOIN users u ON (c.username= u.username) ORDER BY c.username
    