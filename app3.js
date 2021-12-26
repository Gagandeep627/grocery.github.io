

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const grocery_form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery_container = document.querySelector(".grocery-container");

const list = document.querySelector(".grocery-list");

const clearBtn = document.querySelector(".clear-btn");

const grocery = document.querySelector("#grocery");

const submitBtn = document.querySelector(".submit-btn");






// const delete_btn = document.querySelector(".delete-btn");
// delete_btn.addEventListener("click", removeitem);

grocery_form.addEventListener("submit", additem);

clearBtn.addEventListener("click", clearItems);


let editflag = false;

let Editid;


function additem(ele) {


    ele.preventDefault();
    const val = document.querySelector("#grocery").value;

    const id = new Date().getTime().toString();

    console.log(val);

    if (val !== "" && !editflag) {

        //-->
        console.log("to add element//");

        const element = document.createElement("article");

        const attr = document.createAttribute("data-id");

        attr.value = id;

        element.setAttributeNode(attr);

        element.classList.add("grocery-item");


        element.innerHTML = `<p class="title">${val}</p>
        <div class="btn-container">
          <!-- edit btn -->
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <!-- delete btn -->
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `;

        list.appendChild(element);
        grocery_container.classList.add("show-container");


        //   deleting - btn:

        const delete_btn = element.querySelector(".delete-btn");
        delete_btn.addEventListener("click", deleteitem);




        const edit_btn = element.querySelector(".edit-btn");
        edit_btn.addEventListener("click", edititem);


        displayAlert("item added", "success");
        setbackdefault();










    }

    else if (val !== "" && editflag) {


        setbackdefault();


        // edit  local storage
        // editLocalStorage(editID, val);








    }
    else {
        console.log("null//");
        //-->
        displayAlert("add item", "danger")







    }









}





////////functions ===>


function deleteitem(item) {

    const article = item.currentTarget.parentElement.parentElement;

    // const id = element.id;

    // console.log(id);

    list.removeChild(article);

    if (list.children == 0) {

        grocery_container.classList.remove(".show-container");



    }



    displayAlert("item removed", "danger");

    setbackdefault();








}


function edititem(item) {

    const element = item.currentTarget.parentElement.parentElement;

    const editElement = element.children[0];

    console.log("edit-element :", editElement);

    grocery.value = editElement.innerHTML;


    // editID = element.id;
    editflag = true;

    // editID = ele.data-set.id;

    submitBtn.textContent = "Edit Now";

    makenewsubmit(element, editElement, submitBtn, grocery);
    // setbackdefault();









}


function clearItems() {

    const items = document.querySelectorAll(".grocery-item");

    if (items.length > 0) {
        items.forEach(function (item) {

            list.removeChild(item);



        });


    }

    grocery_container.classList.remove("show-container");

    displayAlert("queue cleared", "danger");

    setbackdefault();

}

function displayAlert(textContent, action) {

    alert.textContent = textContent;
    alert.classList.add(`alert-${action}`);

    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);

}

function setbackdefault() {

    document.querySelector("#grocery").value = "";

    editflag = false;

    Editid = "";

    document.querySelector(".submit-btn").textContent = "submit";

    editElement = "";










}



function removeitem(i) {

    const element = i.currenttarget.parentElement.parentElement;

    console.log(element);



}

function makenewsubmit(element, editElement, submitBtn, grocery) {

    if (grocery.value !== "") {

        submitBtn.addEventListener("click", () => {

            console.log(editElement);

            editElement.innerHTML = grocery.value;
            editElement = "";






        });


        displayAlert("edit your item", "success");


    }
    else {

        //<p class="title">a</p>

        // editElement.innerHTML = `<p class="title">null</p>`;
        displayAlert("enter the value", "danger");

    }





}










