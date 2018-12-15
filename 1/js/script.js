var rowlik=document.querySelector(".rowlik"); // вместо rowlik написать класс тега туда, куда хотите добавить карточки
var srcs=["img/5.jpg","img/8.jpg","img/3.jpg","img/4.jpg"]; //написать путь к изображеним
var pis=["Колленного сустава","Локтевого сустава","Тазобедренного сустава","Кистевого сустава"];
//в pis написать контент для карточек
for(var i=0;i<4;i++){
	var div1=document.createElement("div");
	rowlik.appendChild(div1);//вместо rowlik написать класс тега туда, куда хотите добавить карточки
	div1.className="col s12 l3";
	var div2=document.createElement("div");
	div1.appendChild(div2);
	div2.className="card";
	var div3=document.createElement("div");
	div2.appendChild(div3);
	div3.className="card-image";
	var img=document.createElement("img");
	div3.appendChild(img);
	img.src=srcs[i];
	var div5=document.createElement("div");
	div2.appendChild(div5);
	div5.className="card-content";
	var p=document.createElement("p");
	div5.appendChild(p);
	p.innerHTML=pis[i];
}
