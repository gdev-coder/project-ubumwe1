<template>
<article class="body">
<div class="words">
                <h1 class="create">REGITRATION FORM...</h1>
 </div>
            <div class="form">
                <form>
                    <label for="Full-name:">Full-name:</label><br>
                    <input type="text" class="dd"><br>
                    <label for="Email:">Email:</label><br>
                    <input type="email" class="dd"><br>
                    <label for="ID:">ID:</label><br>
                    <input type="text" class="dd"><br>
                    <label for="Room-Number:">Room-Number:</label><br>
                    <input type="number" class="dd"><br>
                     <label for="Date:">Date:</label><br>
                    <input type="date" class="dd"><br><br>
                    <input type="submit" value="SUBMIT" class="button"><br><br>
                    
                   
                </form>
            </div>
            </article>
</template>
<script>
</script>
<style>
                .body
                {
                    background-color:indigo;
                    position:relative;
                    width:1300px;
                    top:80px;
                    left:105px;
                }
                .form
                {
                    border:3px solid white;
                    border-radius:10px;
                    width:600px;
                    height:400px;
                    position:relative;
                    left:50px;
                    top:-30px;
                    background-color:white;
                }
                form
                {
                    padding-right:140px;
                    padding-top:20px;
                }
                input
                {
                    height:30px;
                    width:300px;
                    border-radius:5px;
                    border:0.6px solid black;
                }
                .dd
                {
                    font-family:"Arial Black";
                }
                .button
                {
                    background-color:black;
                    color:white;
                    font-size:15px;
                    letter-spacing:1px;
                    font-family:"Arial Black";
                }
                .button1
                {
                    background-color:red;
                    color:white;
                    font-size:15px;
                    letter-spacing:1px;
                    font-family:"Arial Black";
                    font-weight:bold;
                    border:1px solid red;
                }
                label
                {
                    letter-spacing:1px;
                    font-family:"Century Gothic";
                    font-weight:bold;
                    text-align:left;
                }
                .words
                {
                    position:relative;
                    top:250px;
                    left:30px;
                }
                .create
                {
                    font-size:40px;
                    color:white;
                    letter-spacing:1px;
                }
                </style>