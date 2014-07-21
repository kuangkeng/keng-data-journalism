<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Do you sleep, work and play more than fellow Americans?</title>
  <meta property="og:type" content="website" /> 
  <meta property="og:site_name" content="NBC New York" />
  <meta property="og:description" content="<?php echo $params; ?>"/>
  <meta property="og:title" content="Do you sleep, work and play more than fellow Americans?" />
  <meta property="og:url" content="http://kuangkeng.github.io/keng-data-journalism/timeuseform/result1.html"/>
  <meta property="og:image" content="http://kuangkeng.github.io/keng-data-journalism/timeuseform/images/sleepmore.jpg" />

  <link href='http://fonts.googleapis.com/css?family=Arimo:400,700|Roboto' rel='stylesheet' type='text/css'>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.12.0/jquery.validate.min.js"></script>
  <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
  <script src="d3-tipsy.js" charset="utf-8"></script>
  <link rel="stylesheet" type="text/css" href="styledropemo.css">
</head>
<body>
 
<h1>Do you sleep, work and play more than fellow Americans?</h1>
<br>
<hr width="100%" size="2" noshade="noshade" color="#8A8A8A"/>
<form name="myForm" id="timeuseform" method="get" action="#">
<p>Compare how you use your time with other Americans based on the results from the American Time Use Survey (ATUS) 2013.</p><br>
<ol>
<li>
How many hours do you typically sleep a night?<br>
<input type="text" name="sleephour" value="0" id="inputsleephour"/> hour
&nbsp;&nbsp;&nbsp;<input type="text" name="sleepmin" value="0" id="inputsleepmin"/> minute<br>
<div id="sleepboxmore">
<table witdh="600">
  <tr>
    <th width="78%" height="70">Stop hitting that snooze button! You sleep <span id="sleepnomore"></span> than the average American who sleeps 8 hours 44 minutes.
    <th align="center"><img src="images/sleepmore.jpg"></th></th>
  </tr>
</table>
</div>
<div id="sleepboxless">
<table witdh="600">
  <tr>
    <th width="78%" height="70">Go back to bed! You sleep <span id="sleepnoless"></span> than the average American, who sleeps 8 hours 44 minutes.
    <th align="center"><img src="images/sleepless.jpg"></th></th>
  </tr>
</table>
</div><br><br>
</li>
<li>
How many hours do you spend on the job during the average workday? Don’t count commute time.<br>
<input type="text" name="workhour" value="0" id="inputworkhour"/> hour
&nbsp;&nbsp;&nbsp;<input type="text" name="workmin" value="0" id="inputworkmin"/> minute
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Employment status
<SELECT NAME="workstatus" SIZE="1" id="inputworkstatus">
<OPTION>full-time</option>
<OPTION>part-time</option>
</SELECT><br>
<div id="workboxmore">
<table witdh="600">
  <tr>
    <th width="78%" height="70">Clock out already! You work <span id="worknomore"></span> than the average <span id="workgendermore"></span> American with a <span id="workstatusmore"></span> job, who works <span id="workavgnomore"></span>. The figure among general American population is 7 hours 35 minutes.
    <th align="center"><img src="images/workmore.jpg"></th></th>
  </tr>
</table>
</div>
<div id="workboxless">
<table witdh="600">
  <tr>
    <th width="78%" height="70">Time to get back to work! You work <span id="worknoless"></span> than the average <span id="workgenderless"></span> American with a <span id="workstatusless"></span> job, who works <span id="workavgnoless"></span>. The figure among general American population is 7 hours 35 minutes.
    <th align="center"><img src="images/workless.jpg"></th></th>
  </tr>
</table>
</div><br><br>
<li>
How much time you spend shopping per day, either in person, on the phone, online or at a store?<br>
<input type="text" name="shophour" value="0" id="inputshophour"/> hour
&nbsp;&nbsp;&nbsp;<input type="text" name="shopmin" value="0" id="inputshopmin"/> minute<br>
<div id="shopboxmore">
<table witdh="600">
  <tr>
    <th width="78%" height="70">Put away that credit card! You shop <span id="shopnomore"></span> than the average <span id="shopgendermore"></span> American age <span id="shopagemore">%</span>, who shops <span id="shopavgnomore"></span>. The figure among general American population is 45 minutes.
    <th align="center"><img src="images/shopmore.jpg"></th></th>
  </tr>
</table>
</div>
<div id="shopboxless">
<table witdh="600">
  <tr>
    <th width="78%" height="70">Get your wallet out! You shop <span id="shopnoless"></span> than the average <span id="shopgenderless"></span> American age <span id="shopageless"></span>, who shops <span id="shopavgnoless"></span>. The figure among general American population is 45 minutes.
    <th align="center"><img src="images/shopless.jpg"></th></th>
  </tr>
</table>
</div><br><br>
</li>
<li>
How much time you spend watching TV on a weekend day?<br>
<input type="text" name="tvhour" value="0" id="inputtvhour"/> hour
&nbsp;&nbsp;&nbsp;<input type="text" name="tvmin" value="0" id="inputtvmin"/> minute<br>
<div id="tvboxmore">
<table witdh="600">
  <tr>
    <th width="78%" height="70">Step away from the flat-screen! You watch <span id="tvnomore"></span> TV than the average American age <span id="tvagemore"></span>, who watches <span id="tvavgnomore"></span> each weekend day. The figure among general American population is 3 hours 14 minutes.
    <th align="center"><img src="images/tvmore.jpg"></th></th>
  </tr>
</table>
</div>
<div id="tvboxless">
<table witdh="600">
  <tr>
    <th width="78%" height="70">Grab that remote! You watch <span id="tvnoless"></span> TV than the average American age <span id="tvageless"></span>, who watches <span id="tvavgnoless"></span> each weekend day. The figure among general American population is 3 hours 14 minutes.
    <th align="center"><img src="images/tvless.jpg"></th></th>
  </tr>
</table>
</div><br><br>
</li>
<li>
How long do you spend playing video games and using computers for leisure, such as browsing the Internet or checking Facebook, on a typical weekend day?<br>
<input type="text" name="videohour" value="0" id="inputvideohour"/> hour
&nbsp;&nbsp;&nbsp;<input type="text" name="videomin" value="0" id="inputvideomin"/> minute<br>
<div id="videoboxmore">
<table witdh="600">
  <tr>
    <th width="78%" height="70">Log off and put the game console away! You spend <span id="videonomore"></span> time on these activities than the average American age <span id="videoagemore"></span>, who spends <span id="videoavgnomore"></span>. The figure among general American population is 29 minutes.
    <th align="center"><img src="images/videomore.jpg"></th></th>
  </tr>
</table>
</div>
<div id="videoboxless">
<table witdh="600">
  <tr>
    <th width="78%" height="70">Go ahead, start that YouTube binge! You spend <span id="videonoless"></span> time on these activities than the average American age <span id="videoageless"></span> who spends <span id="videoavgnoless"></span>. The figure among general American population is 29 minutes.
    <th align="center"><img src="images/videoless.jpg"></th></th>
  </tr>
</table>
</div><br><br>
</li>
<li>
How much time you spend on sports, exercise and recreation on a weekend day?<br>
<input type="text" name="sportshour" value="0" id="inputsportshour"/> hour
&nbsp;&nbsp;&nbsp;<input type="text" name="sportsmin" value="0" id="inputsportsmin"/> minute<br>
<div id="sportsboxmore">
<table witdh="600">
  <tr>
    <th width="78%" height="70">Give those muscles a break! You workout <span id="sportsnomore"></span> than the average American age <span id="sportsagemore"></span>, who spends <span id="sportsavgnomore"></span> breaking a sweat. The figure among general American population is 22 minutes.
    <th align="center"><img src="images/sportsmore.jpg"></th></th>
  </tr>
</table>
</div>
<div id="sportsboxless">
<table witdh="600">
  <tr>
    <th width="78%" height="70">Better hit the gym! You workout <span id="sportsnoless"></span> than the average American age <span id="sportsageless"></span>, who spends <span id="sportsavgnoless"></span> breaking a sweat. The figure among general American population is 22 minutes.
    <th align="center"><img src="images/sportsless.jpg"></th></th>
  </tr>
</table>
</div><br><br>
</li>
<li class="genderbox">Gender
<SELECT name="gender" SIZE="1" id="inputgender">
<OPTION>male</option>
<OPTION>female</option>
</SELECT>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Age
<SELECT name="age" SIZE="1" id="inputage">
<OPTION>15 to 19</option>
<OPTION>20 to 24</option>
<OPTION>25 to 34</option>
<OPTION>35 to 44</option>
<OPTION>45 to 54</option>
<OPTION>55 to 64</option>
<OPTION>65 to 74</option>
<OPTION>75 and above</option>
</SELECT>
</li>
<br><br>
</ol>

<input type="submit" value="Submit" id="button"/>

</form>

<br>
<div id="result">
<h3 id="bartitle">Your results compared with Americans of your gender, age group and employment status</h3>
<div id="instruction">Hover over the bars to see which group is being compared and their average time use</div>
<div id="barbox"></div>
<br><br>
<h3 id="bartitle2">Your results compared with general American population</h3>
<div id="instruction">Hover over the bars to see the average time use</div>
<div id="barbox2"></div>
<br><br>

<FORM id="bottomform">
<INPUT TYPE="button" onClick="history.go(0)" VALUE="Take the quiz again" id="reset">
</FORM>

<div id="sharebox">
<p>or</p>
<h3>Share your results</h3>
<a href="http://twitter.com/share"
    class="twitter-share-button"
    data-text="This is what we want to change dynamically"
    data-count="vertical" data-via="kuangkeng">Tweet</a>
    <span class="facebook">FB share</span>
</div>

</div>
<br><br><br>
<div id="note">
<span style="font-weight:bold; font-size:14px">Note:</span>
<p>Employment status: Full-time workers are those who usually worked 35 hours or more per week at all jobs combined. Part-time workers are those who usually worked fewer than 35 hours per week at all jobs combined.</p>
<p>Comparison of time use according to categories - gender, age group and employment status - is carried out based on how the ATUS data is categorized. E.g., the data of work time is not categorized by age groups, while the data of time use on watching TV, playing games and computer use for leisure, and sports, exercise and recreation, is not categorized by age within gender.</p>
</div>
<br>
<hr width="100%" size="2" noshade="noshade" color="#8A8A8A"/>
<br>
<div id="about">
<h2>About American Time Use Survey 2013</h2>

<p>The results of from the <a href="http://www.bls.gov/news.release/atus.nr0.htm" target="_blank"> American Time Use Survey (ATUS) 2013</a> was released on June 18. The annually released survey conducted by the U.S. Census Bureau for the Bureau of Labor Statistics (BLS) is a continuous study about how civilians age 15 and over spend their time. These data include the average amount of time per day in 2013 that individuals worked, did household activities, and engaged in leisure and sports activities.</p>

<p>The survey found that on average employed men (7 hours 58 minutes) worked 53 minutes more than employed women (7 hours 5 minutes) on workday, partly due to women's greater likelihood of working part time. However, among full time workers, men (8 hours 20 minutes) also worked 37 minutes longer than women (7 hours 44 minutes).</p>

<p>Watching TV was the top leisure activity among Americans who watch an average of 2 hours 46 minutes per day or 3 hours 14 minutes on weekend day. Men (2 hours 59 minutes) watched 25 minutes more TV than women (2 hours 34 minutes) per day.</p>

<p>Men were more likely than women to participate in sports, exercise, or recreation on any given day - 21 percent compared with 16 percent. On the days that they participated, men also spent 40 minutes more in these activities than women – 1 hour 54 minutes compared with 1 hour 14 minutes.</p>

<p>Time spent playing games or using a computer for leisure varied greatly by age. Individuals in the age groups of 15 – 19 and 20 – 24, spent 52 and 56 minutes respectively on the activity on weekend day, the highest among all age groups. The average time across all ages was 29 minutes.</p>

<p>The Wall Street Journal has published a <a href="http://online.wsj.com/articles/aging-americans-sleep-more-work-less-survey-finds-1403121530" target="_blank">report</a> comparing the survey results with historical data.
</div>

<script type="text/javascript" src="scriptdrop.php"></script>
</body>
<script>
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '691401517599245',
          xfbml      : true,
          version    : 'v2.0'
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    </script>
</html>