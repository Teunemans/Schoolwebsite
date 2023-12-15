<!DOCTYPE html>
<html lang="en" class="background">
<head>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">
    <!-- jquery dingetje -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>De grote Informatica Website</title>
</head>
<body class="content">
    <nav>
    <div class="navbar">
            <div class="navitem"><a class="navitem logo" href="index.html">>_</a></div>
            <div class="navitem"><a class="navitem" href="index.html">Home</a></div>
            <div class="navitem"><a class="navitem" href="informatica.html">Informatica</a></div>
            <div class="navitem"><a class="navitem" href="school.html">School</a></div>
            <div class="navitem"><a class="navitem" href="overmij.html">Over mij</a></div>
            <div class="navitem"><a href="game.html" class="active navitem">Unlock</a></div>
            <div class="navitem"><a href="login.php" id="login" class="navitem">Login</a></div>
        </div>
    </nav>
    <div class="textbody typewriter">
        <h1 id="title">
            Login   
        </h1>
        <p>
            Zet kunt u inloggen met uw gebruikersnaam en wachtwoord
        </p>
        <form method="POST" action="login.php">
            <input type="text" name="username" placeholder="Gebruikersnaam">
            <input type="password" name="password" placeholder="Wachtwoord">
            <input type="submit" value="Login">
        </form>

    </div>
</body>
</html>

<?php 

   $username = $_POST['username'];
   $password = $_POST['password'];

   // Check the username and password against stored user data
   if ($username == 'admin' && $password == 'password') {
       echo 'You are now logged in.';
   } else {
       echo 'Invalid username or password.';
   }

?>