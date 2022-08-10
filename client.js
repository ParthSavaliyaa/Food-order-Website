let restaurant_A = {
	name: "", //The name of the restaurant
	min_order: 20, //The minimum order amount required to place an order
	delivery_charge: 5, //The delivery charge for this restaurant
	//The menu
	menu: {
		//First category
		"Pizza": {
			//First item of this category
			0: {
				name: "Paneer Pizza",
				description: "Seasoned and grilled over an open flame.", //
				price: 15.50
				
			},
			1: {
				name: "Malai Panner Pizza",
				description: "Served with malai, 5 per order.",
				price: 14.00
			},
			2: { 
				name: "Corn Pizza",
				description: "Pizza garnished with Corn fiesta.",
				price: 17.50
			},
			3: {
				name: "Pyaza Pizza",
				description: "Bet you can't eat it all.",
				price: 15.10
			},
			4: {
				name: "Chicken Pizza",
				description: ".",
				price: 14.50
			}
		},
		"Sandwitch": {
			5: {
				name: "Chicken Sandwitch",
				description: "An arm and a leg, a side of cheek meat, and a buttered biscuit.",
				price: 15.99
			},
			6: {
				name: "Spicy Chicken Sandwitch",
				description: "Lots of unidentified pieces. Serves 50.",
				price: 65.00
			},
			7: {//Thanks to M_Sabeyon
				name: "Deluxe Chicken Sandwitch",
				description: "Smeagol's favorite.",
				price: 15.75
			},
			8: { //Thanks Shar[TA]
				name: "Spicy Deluxe Sandwitch",
				description: "Blackened beyond recognition.",
				price: 13.33
				
			},
			10: {
				name: "Baffaloo Ranch Sandwitch.",
				description: "Get it while supplies last.",
				price: 17.50
			},
			
		},
		"Beverages": {
			11: {
				name: "Pepsi",
				description: "",
				price: 3.99
			},
			12: {
				name: "Diet Pepsi",
				description: "",
				price: 2.99
			},
			13: {
				name: "Coke",
				description: "",
				price: 3.99
			},
			14: {
				name: "Diet Coke",
				description: "",
				price: 3.99
			},
			15: {
				name: "Fresh Lemonade",
				description: "",
				price: 7.99
			},
			16: {
				name: "Coorslight",
				description: "",
				price: 5.99
			}
		}	
	}
};



let restaurants = [restaurant_A];

//Draws a circle line break
let circles = document.getElementById("circles");
function drawCircles(){
	let w = window.innerWidth;
	let numCircles = w/25;
	let intNumCircles = parseInt(numCircles);
	for(let i=0;i<intNumCircles-1;i++){
		let cir = document.createElement("span");
		cir.className = "dot";
		circles.appendChild(cir);
	}
}
drawCircles();


let subTotal, tax, deliveryFee, minOrder, total, toAdd;
let itemsOrdered = {};

//Add options in the drop down menu
let restaurant = document.getElementById("dropDownMenu");
for(let i=0;i<restaurants.length;i++){
	let opt = document.createElement("option");
	opt.value = restaurants[i].name;
	opt.innerText = restaurants[i].name;
	opt.id = restaurants[i].name;
	restaurant.appendChild(opt);
}

//This function prints the 3 basic details about the restaurant i.e., name, minimum order and delivery charge
function basicInfo(i){
	
	
}

//This function adds categories name and the full fledged menu.
function categoryAndItems(i){
	let categoryData = "";
	let itemCategory = "";
	for(ele in restaurants[i].menu){
	//	categoryData += `<strong><h4><a title="Click here to jump to ${ele}" href="#${ele}">&#x2728;${ele}</a></h4></strong>`;
		itemCategory += `<strong><p id ="${ele}">&#x2728;${ele}</p></strong><br>`;
		for(ele2 in restaurants[i].menu[ele]){
			itemCategory += `<strong>${restaurants[i].menu[ele][ele2].name} ($${restaurants[i].menu[ele][ele2].price}</strong>) 
			 <img src="img/add.png" alt="${restaurants[i].menu[ele][ele2].name}" style="width:20px;height:20px;" onclick="recordAdd(this)" 
			  title="Click here to add ${restaurants[i].menu[ele][ele2].name} to the order"><br>${restaurants[i].menu[ele][ele2].description}<br><br>`;
            
			
		}
	}
	document.getElementById("category").innerHTML = categoryData;
	document.getElementById("itemsOfCategory").innerHTML = itemCategory;
}

//This function calls other functions and renders the window for us
function render(){
	for(let i=0;i<restaurants.length;i++){
		if(restaurant.value === restaurants[i].name){
			subTotal=0;
			tax=0;
			deliveryFee=0;
			minOrder=0;
			total=0;
			toAdd = 0;
			itemsOrdered = {};

			basicInfo(i);

			categoryAndItems(i);

			let recordStr = "";
			recordStr += `Subtotal: $${subTotal.toFixed(2)}<br>Tax: $${tax.toFixed(2)}<br>Delivery charge: $${deliveryFee.toFixed(2)}<br>Total: $${total.toFixed(2)}<br>Add $${minOrder.toFixed(2)} more to your order<br>`;
			document.getElementById("records").innerHTML = recordStr;
		}
	}
}

//This function is responsible for adding the item in the order when add image is clicked.
function recordAdd(item){
	let addItem = item.alt;
	let addPrice = 0;
	for(let i=0; i<restaurants.length; i++){
		if(restaurant.value === restaurants[i].name){
			for(ele in restaurants[i].menu){
				for(ele2 in restaurants[i].menu[ele]){
					if(restaurants[i].menu[ele][ele2].name === addItem){
						addPrice = restaurants[i].menu[ele][ele2].price;
						// console.log(restaurants[i].menu[ele][ele2]);
					}
				}
			}
		}
	}
	//console.log(typeof(addPrice));
	subTotal += addPrice;
	//console.log(typeof(subTotal));
	//console.log(subTotal);
	tax = (0.1)*subTotal;

	total = subTotal+tax+deliveryFee;

	toAdd = minOrder - total;
	// console.log(Object.keys(itemsOrdered));
	// console.log((Object.keys(itemsOrdered)).includes(addItem));
	if((Object.keys(itemsOrdered)).includes(addItem)){
		//console.log(itemsOrdered[addItem]);
		itemsOrdered[addItem][0] +=1;
	}
	else{
		itemsOrdered[addItem] = [1,addPrice];
	}
	printRecords();
	window.alert(`Successfully added ${addItem} to the order`)
}

//This function is responsible for removing the item from the order when remove image is clicked.
function recordMinus(getRid){
	let removeItem = getRid.alt;
	let removePrice = 0;
	removePrice = itemsOrdered[removeItem][1];
	subTotal -= removePrice;
	tax = (0.1)*subTotal;
	total = subTotal+tax+deliveryFee;
	toAdd = minOrder - total;
	if(itemsOrdered[removeItem][0] === 1){delete itemsOrdered[removeItem];}
	else{itemsOrdered[removeItem][0] -=  1;}
	printRecords();
	window.alert(`Successfully removed ${removeItem} from the order`);
	
}

//This function prints the order records to the screen.
function printRecords(){
	let recordStr = "";
	for(key in itemsOrdered){
		recordStr += `${key} x ${itemsOrdered[key][0]}($${itemsOrdered[key][1]}) <img src="img/remove.png" alt="${key}" style="width:17px;height:17px;" onclick="recordMinus(this)"> <br>`;}
	if(toAdd > 0){recordStr += `Subtotal: $${subTotal.toFixed(2)}<br>Tax: $${tax.toFixed(2)}<br>Delivery charge: $${deliveryFee.toFixed(2)}<br>Total: $${total.toFixed(2)}<br>Add $${toAdd.toFixed(2)} \
	more to your order<br>`;}
	else{recordStr += `Subtotal: $${subTotal.toFixed(2)}<br>Tax: $${tax.toFixed(2)}<br>Delivery charge: $${deliveryFee.toFixed(2)}<br>Total: $${total.toFixed(2)}<br>`;}
	recordStr += `<input type="submit" value="Place the above order." onclick="ask()"<br></input>`;
	document.getElementById("records").innerHTML = recordStr;
}

//This function confirms from the user about changing the window or not.
function confirmChange(){
	if(Object.keys(itemsOrdered).length > 0){
		let changeAlert = confirm("Do you want to restart ordering with a different restaurant?");
		if(changeAlert){
			previous = restaurant.value;
			render();
		}
		else{
			//document.getElementById(tempVar).selected = true;
			// console.log("new1 is : " + restaurant.value);
			// console.log("previous1 is : " + previous);
			// console.log("trying to set previous");
			document.getElementById(`${previous}`).selected = true;
			previous = restaurant.value;
			// console.log("previous2 is : " + previous);
			// console.log("\n");
		}
	}
	else{
		previous = restaurant.value;
		render();
	}
}

function ask(){
	window.alert("Order Placed !!");
	document.innerHTML = "Thank you for placing order with us today";
}

render();
let previous = restaurant.value;
restaurant.addEventListener("change", confirmChange);