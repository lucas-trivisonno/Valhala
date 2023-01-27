import React from "react";

const Contacto = () => {
return(
    <div className="size">
        <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Nombre</label>
  <input type="text" class="form-control" id="formGroupExampleInput" />
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Apellido</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" />
</div>
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Telefono</label>
  <input type="text" class="form-control" id="formGroupExampleInput" />
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Email</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Consulta</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
    </div>
)
}


export default Contacto;