var rowlik=document.querySelector(".rowlik"); // вместо rowlik написать класс тега туда, куда хотите добавить карточки
var srcs=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/10.jpg","img/11.jpg","img/12.jpg","img/13.jpg"]; //написать путь к изображеним
var pis=["Голеностопный ортез","Ортез колленного сустава","Ортез тазобедренного сустава","Ортез кистевого сустава","Ортез таза","Спинной ортопедический корсет","Ортопедический корсет таза","Ортез локтевого сустава"];
var descr=["Цена: 1499 рублей","Цена: 3499 рублей","Цена: 14000 рублей", "Цена: 999 рублей", "Цена: 5999 рублей", "Цена: 7499 рублей", "Цена: 2999 рублей", "Цена: 1999 рублей"];
//в pis написать контент для карточек
for(var i=0;i<8;i++){
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
	img.style.height="325px";
	img.style.width="100%";
	var hh=document.createElement("span");
	div3.appendChild(hh);
	hh.className="card-title black-text white";
	hh.style.fontFamily="Arial Black";
	hh.style.fontSize="100%";
	hh.innerHTML=pis[i];
	var div5=document.createElement("div");
	div2.appendChild(div5);
	div5.className="card-content";
	var p=document.createElement("p");
	div5.appendChild(p);
	p.innerHTML=descr[i];
	var div6=document.createElement("div");
	div2.appendChild(div6);
	div6.className="card-action center-align";
	var btn=document.createElement("a");
	div6.appendChild(btn);
	btn.className="waves-effect waves-light btn blue";
	btn.innerHTML="В корзину";
}