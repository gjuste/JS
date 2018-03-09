<?php
include 'config.php';

$sql = "
SELECT DISTINCT TRUNCATE (zipcode/1000,0) AS dep,
count(zipcode) as numdep
FROM mouton
GROUP BY dep
";

$req = $pdo->query($sql);
$result = $req->fetchAll(PDO::FETCH_OBJ);

echo json_encode($result);

?>