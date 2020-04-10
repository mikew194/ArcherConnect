import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dynamic-filter',
  templateUrl: './dynamic-filter.component.html',
  styleUrls: ['./dynamic-filter.component.css']
})
export class DynamicFilterComponent implements OnInit {
  public index: number;
  form: FormGroup;
  searchText: string = '';

  levels = [
    "Beginner",
    "Expert",
  ];

  @Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      jobTitle: new FormControl(''),
      level: new FormControl(''),
      agefrom: new FormControl(''),
      ageto: new FormControl('')
    });
  }

  search(filters: any): void {
    Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
    this.groupFilters.emit(filters);
  }
}
