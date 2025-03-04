type Target = EventTarget & HTMLInputElement;
const getInputErrorValidationMessage = (target: Target): string => {
  const validity = target.validity;

  if (validity.valueMissing) {
    return "Este campo es obligatorio.";
  }
  if (validity.typeMismatch) {
    return "El tipo de dato ingresado no es válido.";
  }
  if (validity.patternMismatch) {
    return "El valor no coincide con el patrón requerido.";
  }
  if (validity.tooShort) {
    return `El valor es demasiado corto. Se requieren al menos ${target.minLength} caracteres.`;
  }
  if (validity.tooLong) {
    return `El valor es demasiado largo. No puede exceder ${target.maxLength} caracteres.`;
  }
  if (validity.rangeUnderflow) {
    return `El valor debe ser mayor o igual a ${target.min}.`;
  }
  if (validity.rangeOverflow) {
    return `El valor debe ser menor o igual a ${target.max}.`;
  }
  if (validity.stepMismatch) {
    return "El valor no cumple con el intervalo de pasos definido.";
  }

  return ""; // No validation errors}
};

export default getInputErrorValidationMessage;
