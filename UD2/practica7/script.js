const textoCafe = `{
  "title": "Latte",
  "description": "As the most popular coffee drink out there, the latte is made with a shot of espresso and steamed milk, with just a touch of foam. It can be ordered plain or flavored with everything from vanilla to pumpkin spice.",
  "ingredients": [
    "Espresso",
    "Steamed milk"
  ],
  "image": "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww",
  "id": 2
}`

const cafe = JSON.parse(textoCafe)
console.log(cafe)

document.body.innerHTML += ("<strong><p>LATTE</p></strong>")

document.body.innerHTML += (`<img src="${cafe.image}" style = "height: 300px;">`)


const fichaCafe = {
    "id": cafe.id,
    "nombre": cafe.title,
    "ingredients": cafe.ingredients,
    "imagen": cafe.image
}


const fichaCafe2 = {
    "id": cafe.id,
    "nombre": cafe.title,
    "ingredients": cafe.ingredients,
}

const textoCafe2 = JSON.stringify(fichaCafe2, null, 2);
console.log(textoCafe2)

document.body.innerHTML += ("<strong><p>Ficha en formato JSON</p></strong>")
document.body.innerHTML += ("<pre>" + textoCafe2 + "</pre>")

const cafe2 = JSON.parse(textoCafe2)
console.log("Ficha recuperada ", cafe2)
console.log("¿Incluye imagen? ", ("imagen" in cafe2))






