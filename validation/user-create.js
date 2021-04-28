const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.f_name = !isEmpty(data.f_name) ? data.f_name : "";
  data.l_name = !isEmpty(data.l_name) ? data.l_name : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.job_title = !isEmpty(data.job_title) ? data.job_title : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";

  if (!Validator.isLength(data.f_name, { min: 2, max: 15 })) {
    errors.f_name = "Name must be between 2 and 15 characters";
  }
  if(data.l_name!=""){
    if (!Validator.isLength(data.l_name, { min: 2, max: 15 })) {
        errors.l_name = "Name must be between 2 and 15 characters";
    }
  }
  if (Validator.isEmpty(data.f_name)) {
    errors.f_name = "First Name field is required";
  }

  if(data.email!=""){
    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
  }
  if (!Validator.isLength(data.phone, { min: 10, max: 10 })) {
    errors.phone = "Number must be 10 characters";
  }
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Number field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
