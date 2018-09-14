import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, AbstractControl } from "@angular/forms";
import { IFormsConfiguration } from "../../features/shared/formsConfiguration/formsConfiguration.service";

@Injectable()
export class FormBuildAndValidationService {

  constructor(
    private formBuilder: FormBuilder) {
  }

  //build(configuration: any, validationGroups: Object): FormGroup {
  //  let form: FormGroup = this.formBuilder.group(configuration);
  //  this.configureValidation(form, validationGroups);
  //  return form;
  //}

  build(formsConfigurations: IFormsConfiguration[]): FormGroup {
    let allConfigurations = {};
    let allcontrolValidations = {};
    for (let formsConfiguration of formsConfigurations) {
      Object.assign(allConfigurations, formsConfiguration.configuration);
      Object.assign(allcontrolValidations, formsConfiguration.controlValidation);
    }
    let form: FormGroup = this.formBuilder.group(allConfigurations);
    this.configureValidation(form, allcontrolValidations);
    return form;
  }

  private configureValidation(form: FormGroup, controlValidations: Object): void {
    for (let controlName in controlValidations) {
      let control = form.get(controlName);
      control.valueChanges.subscribe(value => {
        let controlValidation = controlValidations[controlName];
        let messages: string = this.validate(control, controlValidation.validationMessages);
        controlValidation.messageCallback(messages);
      });
    }
  }

  private validate(control: AbstractControl, possibleValidationMessages: Object): string {
    if ((control.touched || control.dirty) && control.errors) {
      return Object.keys(control.errors).map(key => possibleValidationMessages[key]).join(" ");
    }
    else
      return null;
  }

}
