// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);
// console.log(document.body.children);

// Сделаем в переборе коллекции вывод проверки, является ли он div

for (let val of document.body.children) {
	console.log(val.localName === "div" ? "Это DIV" : "Это не DIV");
}

// for (let val of document.body.childNodes) {
// 	console.dir(val.nodeType);
// }

// for (let value of document.body.childNodes) {
// 	console.dir(value.nodeValue);
// }
