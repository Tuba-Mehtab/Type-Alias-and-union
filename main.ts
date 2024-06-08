//Type Alias and Type union

type userName = string;
type userId = number | string; 
type arr = string | number [];
type isAvailable = boolean;
type userage = number;


type person = {
    name : userName; 
    Id : userId;
    isAvailable : isAvailable;
    hobbies : arr[];
    age : userage;
}

const www : person = {
    name : "Tuba Mehtab",
    Id : 123,
    isAvailable : true,
    hobbies : ["Reading","writing","playing"],
    age : 22
}
console.log(www)