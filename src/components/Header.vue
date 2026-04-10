<template>
<header>
<div class="img">
<img src="/src/views/download (1).jpg" class="img1"><p class="webname">UBUMWE HOTEL Ltd</p></img>
</div>
<nav>

<router-link to="/" class="a">Home</router-link>&nbsp;&nbsp;&nbsp;
<router-link to="/Form" class="a">Registration</router-link>&nbsp;&nbsp;&nbsp;
<router-link to="/about" class="a">AboutUs</router-link>&nbsp;&nbsp;&nbsp;
<router-link to="/Contact" class="a">ContactUs</router-link>&nbsp;&nbsp;&nbsp;
<RouterView/>
</nav>

</header>
</template>
<script>
</script>
<style>
.img1
{
height:60px;
border-radius:10px;
}
.img
{
position:relative;
top:20px;
left:20px;
}
nav
{
text-align:right;
position:relative;
right:100px;
}
.a
{
font-family:"Arial Black";
text-decoration:none;
color:white;
font-size:21px;
}
header
{
background-color:indigo;
height:170px;
width:1300px;
position: relative;
top: 0px;
left: -50px;
border-radius:10px;
}
.webname
{
color:white;
font-family:"Arial Black";
position:relative;
left: -470px;
top:-10px;
}
</style>