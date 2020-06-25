import { usersAcademlo } from "./users.js";
// obtiene la posicion donde se va a insertar los usuarios
const tableBody = document.getElementById("table-body");
// genera e imprime los usuarios en el documento
function printUsers(users) {
  tableBody.innerHTML = "";
  users.forEach((user, index) => {
    tableBody.innerHTML += `
    <tr>
      <td>${index + 1}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.age}</td>
      <td>${user.gender == "female" ? "femenimo" : "masculino"}</td>
      <td>
          <button class="btn btn-danger" onclick="eliminar('${user.email}')">eliminar</button>
      </td>
    </tr>
  `;
  });
}
printUsers(usersAcademlo);
// Obtiene los datos del nuevo usuario
function getNewUser() {
  const inputName = document.getElementById("input-name");
  const inputEmail = document.getElementById("input-email");
  const inputAge = document.getElementById("input-age");
  const inputGender = document.getElementById("select-age");
  const newUser = {
    id: usersAcademlo.length + 1,
    name: inputName.value,
    email: inputEmail.value,
    age: inputAge.value,
    gender: inputGender.value,
  };
  return newUser;
}
// agrega los usuario al array de suarios de academlo
function addUser() {
  const newUser = getNewUser();
  usersAcademlo.unshift(newUser);
  printUsers(usersAcademlo);
}
// eliminar un usuario de la tabla
function eliminar(emailFiltro) {
  usersAcademlo.forEach((user, index) => {
    if (emailFiltro === user.email) {
      usersAcademlo.splice(index, 1);
      console.log(`usuario ${user.name} eliminado`)
    }
  });
  printUsers(usersAcademlo);
}
// filtra de acuerdo a lo que se pide
function filter(value) {
  if (value === "female") {
    let femaleArray = usersAcademlo.filter((user) => {
      return user.gender == "female";
    });
    printUsers(femaleArray);
  }
  if (value === "sort") {
    let orderName = usersAcademlo.sort((nom1, nom2) => {
      if (nom2.name < nom1.name) {
        return 1;
      } else {
        return -1;
      }
    });
    printUsers(orderName);
  }
  if (value === "academlo") {
    let academloEmail = usersAcademlo.filter((user) => {
      let academlo = user.email.indexOf("@academlo.com");
      if (academlo > 0) {
        return academlo;
      }
    });
    printUsers(academloEmail);
  }
}

// agregando funciones globales
window.addUser = addUser;
window.eliminar = eliminar;
window.filter = filter;
