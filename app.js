const Http = new XMLHttpRequest();
const url='https://graph.instagram.com/17841400182674535?fields=username&access_token=IGQVJYVk1sVU9PZATM0dno5Sl9LZAmRvQjlRNUVtYzdCY2gxbmNHVWJBd2hkUHRNVEh4WHBoNXV6TEJTc29qSE5RQ0wtT0hBWjVfSjlQcUhwaWJOeGt4ZAjVjU1pKd2tOc3JveFA4RFNNbGc4UE5tZAV9sVzQ4M2J0d2ZA6eUpJ';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  var myObject = Http.response;

  document.getElementById("put-data").innerHTML = myObject;
}

function getAutho() {}