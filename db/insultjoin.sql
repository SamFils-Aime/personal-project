SELECT  insult ,  u.username 
    FROM insult c inner JOIN users u ON (c.username= u.username) ORDER BY c.username