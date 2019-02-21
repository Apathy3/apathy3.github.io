var app = new Vue({
	el: "#app",
	data: {
		contacts: [
			{
				name: "email",
				val: "mailto:keshka96@gmail.com",
			},
			{
				name: "linkedin",
				val: "https://www.linkedin.com/in/alexander-grachev-9231a116b/",
			},
			{
				name: "telegram",
				val: "https://t.me/Apathy3",
			},
		],
		projects: [
			{
				name: "ПЕРВАЯ АККУМУЛЯТОРНАЯ КОМПАНИЯ",
				img:
					"https://goldcarrot.ru/assets/thumbnails/a8/a85f47d5e824cba89a8e2cc4e1ed7ee0.jpg",
				desc: "Интернет-магазин аккумуляторов",
				link: "https://1acom.ru/",
			},
			{
				name: "АВТОПАРК",
				img:
					"https://goldcarrot.ru/assets/thumbnails/7c/7c74cf824744e1ce32741f77d636aaeb.png",
				desc: "прокат авто",
				link: "https://aparkrent.ru/",
			},
			{
				name: "MAMONTOV LOFT",
				img:
					"https://goldcarrot.ru/assets/thumbnails/f9/f91690fe845012a4463dbc388b96bb6f.jpg",
				desc: "Уникальное loft-пространство москвы",
				link: "https://mamontovloft.ru/",
			},
			{
				name: "ОРИОН",
				img:
					"https://goldcarrot.ru/assets/thumbnails/51/51ad6825630bfc4b9e71ce671dd27662.jpg",
				desc:
					"Интернет-магазин для компании поставок оборудования для инженерных сетей",
				link: "https://oriononline.ru/",
			},
			{
				name: "ROSENBERG FANS CANADA LTD.",
				img:
					"https://goldcarrot.ru/assets/thumbnails/3e/3e706748147cbdb1f13c223bae830c19.jpg",
				desc: "Корпоративный портал",
				link: "http://www.rosenbergcanada.com/",
			},
			{
				name: "АВТОТОЧКА",
				img:
					"https://goldcarrot.ru/assets/thumbnails/83/834dc8b21d2a271e34bd96ced3274ec5.jpg",
				desc: "Выкуп автомобилей",
				link: "http://autotochk-a.ru/",
			},
			{
				name: "ugrasmart",
				img: "./images/ugrasmart.png",
				desc: "мастерская по обслуживанию транспортных средств",
				link: "http://ugrasmart.ru/",
			},
			{
				name: "БТИ",
				img:
					"https://goldcarrot.ru/assets/thumbnails/2a/2aa4af743f4073dc236b16f842bfaf02.jpg",
				desc: "Сургутский центр кадастра и приватизации имущества",
				link: "http://btisurgut.ru/",
			},
			{
				name: "ЭЛ ТЕХНИКА",
				img:
					"https://goldcarrot.ru/assets/thumbnails/f0/f08a1eb88c6e706192e4807b41a5f168.jpg",
				desc: "Корпоративный сайт компании инжиниринга и девлопинга",
				link: "https://el-t.ru/",
			},
			{
				name: "ДОМ",
				img:
					"https://goldcarrot.ru/assets/thumbnails/cb/cb61270936309a50536217503912e635.jpg",
				desc: "Портал агентства недвижимости",
				link: "https://dom-surgut.ru/",
			},
			{
				name: "ЧЁРНЫЙ ЛИС",
				img: "./images/blackfox.png",
				desc: "Сайт гостинницы в Сургуте",
				link: "http://black-hotel.ru/",
			},
			{
				name: "ВРАЧЕБНЫЙ ОФИС +",
				img:
					"https://goldcarrot.ru/assets/thumbnails/01/01929c87117a800b302476320eabfc93.png",
				desc: "Негосударственный медицинский центр ",
				link: "http://vrachoffice.ru/",
			},
			{
				name: "BANANA PARK",
				img:
					"https://goldcarrot.ru/assets/thumbnails/e9/e9a778c8acd60fd99c4a1f73dcd0adf9.png",
				desc: "Детский парк активного отдыха",
				link: "http://bananapark.ru/",
			},
			{
				name: "ТОЧКА РЕШЕНИЯ",
				img:
					"http://urist-dot.ru/assets/thumbnails/84/845c85a6237fc24f3152f0986c0260d2.jpg",
				desc: "Юридические и бухгалтерские услуги",
				link: "http://urist-dot.ru/",
			},
			{
				name: "ДОЛГОВОЕ БЮРО",
				img:
					"http://urist-dot.ru/assets/thumbnails/7a/7aab7161d5eea8cc8453501cb2ced312.jpg",
				desc: "Услуги по возврату долгов",
				link: "https://dolgovoeburo.ru/",
			},
			{
				name: "ECOPOLIMER",
				img: "https://ecopolimer.ltd/images/img/capabilities-2.png",
				desc: "Переработка и покупка пластиковых отходов",
				link: "https://ecopolimer.ltd/",
			},
			{
				name: "Пенсия тут",
				img: "./images/kzprof.png",
				desc: "Юридический центр пенсионного права",
				link: "http://xn--e1agogmhah0i.xn--p1ai/",
			},
			{
				name: "SOLOWAY",
				img:
					"http://www.solo-way.ru/assets/thumbnails/89/89f2674ea1ebb44c87cb384037896785.jpg",
				desc: "Travel Studio",
				link: "http://www.solo-way.ru/",
			},
			{
				name: "МЛК",
				img: "http://mlc1.ru/images/img/picture-1.png",
				desc: "Автотранспортные перевозки по всей России",
				link: "http://mlc1.ru/",
			},
			{
				name: "oknasurguta",
				img: "./images/oknasurguta.jpg",
				desc: "Пластиковые окна",
				link: "http://oknasurguta.ru/",
			},
			{
				name: "РегионПромАльп",
				img: "./images/regionpromalp.png",
				desc: "Промышленный альпинизм в Югре",
				link: "http://regionpromalp.ru/",
			},
			{
				name: "СПС ПАРКИНГ",
				img: "http://sps-parking.ru/images/img/desc-info.png",
				desc: "Паркинги в сургуте",
				link: "http://sps-parking.ru/",
			},
			{
				name: "РАКИБ",
				img: "./images/racib.png",
				desc: "Акселератор ракиб",
				link: "https://racib.ventures/ru",
			},
			{
				name: "ВАШИСУШИ",
				img: "http://surgut.sushi-hmao.ru/images/index/about-bg.png",
				desc: "Доставка суши Япона Хата (Ваши Суши)",
				link: "http://surgut.sushi-hmao.ru/",
			},
			{
				name: "ДЕНЬЮГРЫ",
				img: "./images/c1abd6aq0eeq.jpg",
				desc: "",
				link: "http://xn--c1abd6aq0eeq.xn--p1ai/",
			},
			{
				name: "ZODCHIY",
				img: "./images/zodchiy.png",
				desc: "Архитектура и проектирование",
				link: "http://zodchiy.testgc.ru/",
			},
			// {
			// 	name: "",
			// 	img: "",
			// 	desc: "",
			// 	link: "",
			// },
		],
	},
});
