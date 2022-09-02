export default function cantidadCaracteres(input){
    if(input.value.trim().length >= 1 && input.value.trim().length <= 2){
        console.log("dato valido");
        input.className = "form-control is-valid";
        return true;
    }else {
        console.log("dato invalido");
        input.className = "form-control is-invalid";
        return false;
    }
}