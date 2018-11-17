import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    shLForm: FormGroup;
    submitted = false;
    longestString: string;
    formData = {
        shListName: '',
        shItems: []
    };

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        this.shLForm = new FormGroup({
            'shLName': new FormControl(null, Validators.required),
            'shLItName': new FormArray([
                new FormControl(null, Validators.required)
            ])
        });
    }

    onAddItem() {
        const control = new FormControl(null, Validators.required);
        (<FormArray>this.shLForm.get('shLItName')).push(control);
    }

    onDeleteItem(index: number) {
        (<FormArray>this.shLForm.get('shLItName')).removeAt(index);
    }

    get shItemsData() {
        return <FormArray>this.shLForm.get('shLItName');
    }

    clearFormArray(formArray: FormArray) {
        while (formArray.length !== 0) {
            formArray.removeAt(0);
        }
        this.onAddItem();
    }

    private longestStringFn(arr) {
        let lString = '';

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length > lString.length) {
                lString = arr[i];
            }
        }
        return lString;
    }

    submitForm(formData: any, formDirective: FormGroupDirective): void {
        this.submitted = true;
        this.formData.shListName = this.shLForm.value.shLName;
        let arr2 = [];

        for (const item of this.shItemsData.controls) {
            arr2.push(item.value);
        }
        arr2.sort();
        this.formData.shItems = arr2;
        this.longestString = this.longestStringFn(this.formData.shItems);
        arr2 = [];
        this.clearFormArray(this.shItemsData);

        formDirective.resetForm();
        this.shLForm.reset();
    }
}
