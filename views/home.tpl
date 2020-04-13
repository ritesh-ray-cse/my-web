<html>
<title> Website </title>

<body>
% for i in linklist :
 <a href={{i}}> visit {{i.split('/')[1]}} </a> <br>
%end
</body>
</html>