let user = {
  name: "",
  birthdate: "",
  weight: "",
  height: "",
  gender: "",
};

const date = new Date();

function Enviar() {
  const name = document.getElementById("name").value;
  const birthdate = new Date(document.getElementById("date").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseInt(document.getElementById("height").value);
  const gender = document.getElementById("select").value;

  user["gender"] = gender;

  if (
    name.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/g).join("") == name
  ) {
    user["name"] = name;
  } else {
    console.log("erro");
  }

  if (birthdate.getTime() < date.getTime()) {
    user["birthdate"] = birthdate.toUTCString();
  } else {
    console.log("erro");
  }

  if (!isNaN(weight)) {
    if (weight > 0) {
      user["weight"] = weight;
    } else {
      console("peso inferior ou igual a 0");
    }
  } else {
    console.log("valor diferente de numero");
  }

  if (!isNaN(height)) {
    if (height > 0) {
      user["height"] = height;
    } else {
      console("altura inferior ou igual a 0");
    }
  } else {
    console.log("altura diferente de numero");
  }

  console.log(user)
}

document.getElementById("button").addEventListener("click", Enviar);
