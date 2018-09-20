import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CustomerService} from '../../service/customer-service'

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
  providers:[CustomerService]
})
export class CreateCustomerComponent implements OnInit {

    //properties
    public id: string;
    public form: any;
    public formGroup: FormGroup;
    public submitting: boolean;

    //constructor
    constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService) {
        this.submitting = false;
        this.form = {};
        this.formGroup = new FormGroup({});
    }

    //implementations
    ngOnInit() {
      this.createForm();
     
      /*this.id = this.route.snapshot.params['id'];
        let result = this.createService.get(this.id);

        result.subscribe(

            (response) => {


                if (response.success) {

                    let group: any = {};
                    let fields = response.result.fields;


                    for (var i = 0; i < fields.length; i++) {


                        switch(fields[i].dataType)
                        {

                            case 'boolean':
                            group[fields[i].name] = new FormControl( false);
                            group[fields[i].name].setValidators([Required(fields[i].required)]);
                            break;

                            default:
                            group[fields[i].name] = new FormControl(fields[i].value);
                            group[fields[i].name].setValidators([Required(fields[i].required)]);
                            break;
                        }
                        

                    }

                    this.form = response.result;
                    this.formGroup = new FormGroup(group);


                }

            },
            (error) => {
                toastr.error("Error: " + error)
            }

        );*/

    }

    //methods
    public createForm(){
      this.formGroup = new FormGroup({
        TypeDocument: new FormControl('',Validators.required),
        Document: new FormControl('',Validators.required),
        Name: new FormControl('',Validators.required),
        Address: new FormControl('',Validators.required),
        PhoneHome: new FormControl('',Validators.required),
        Movil: new FormControl('',Validators.required),
        Email: new FormControl('',Validators.required),
        City: new FormControl('',Validators.required),
        Supplier: new FormControl('',Validators.required)
      });
    }
    public onSubmit() {


        /*if (this.formGroup.valid) {

            this.submitting = true;

            let result = this.createService.save(this.id, this.formGroup.value);

            result.subscribe(
                (response) => {

                    if (response.success) {
                        toastr.success("Proceso exitoso.");
                        let url = '/list/' + this.id;
                        this.router.navigate([url]);
                    }
                    else {
                        toastr.warning(response.message);
                    }

                },
                (error) => {
                    toastr.error("Error: " + error);
                },
                () => {
                    this.submitting= false;
                }
            );

        }*/
    }

    public cancel(): void {
        /*let url = '/list/' + this.id;
        this.router.navigate([url]);*/
        this.createForm();
    }

    public validate(name) {
        return this.formGroup.controls[name].valid;
    }

}
