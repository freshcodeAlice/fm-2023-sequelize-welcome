DROP TABLE "users";


SELECT * FROM users;



... REFERENCES users(id);



INSERT INTO users_to_groups (user_id, group_id, created_at, updated_at)
VALUES (
    12,
    2,
    '2023-06-15T07:18:02.961Z',
    '2023-06-15T07:18:02.961Z'
  );


  INSERT INTO groups (
      name,
      created_at,
      updated_at
    )
  VALUES (
     'first group',
     '2023-06-15T07:18:02.961Z',
     '2023-06-15T07:18:02.961Z'
    );