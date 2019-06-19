import { FormGroup, ValidatorFn } from '@angular/forms';


export const userNamePasswordValidator: ValidatorFn = (formGroup: FormGroup) => {
    const userName = formGroup.get('userName').value;
    const pwd = formGroup.get('password').value;

    if(userName.trim()+pwd.trim()){
        return userName != pwd 
            ? null
            : { userNamePassword: true }
    } else {
        return null;
    }
    
};
