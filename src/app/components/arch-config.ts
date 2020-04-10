export interface ISearchConfig {
  title: string;
  searchTypeKey: string;
  searchFieldGroup: ISearchFieldGroup[];
}

export interface ISearchFieldGroup {
  fieldKey: string;
  searchField: string;
  label: string;
  toolTip: string;
  type: string;
  inputType: string;
  values: string[];
  validationOptions: ValidationOptions;
  searchOperators: SearchOperator[];
}

export class searchFieldGroup implements ISearchFieldGroup {
  fieldKey: string;
  searchField: string;
  label: string;
  toolTip: string;
  type: string;
  inputType: string;
  values: string[];
  validationOptions: ValidationOptions;
  searchOperators: ISearchOperator[];

  constructor(_fieldKey: string, _searchField: string, _label: string, _toolTip: string,
    _type: string, _inputType: string, _values: string[]) {
    this.fieldKey = _fieldKey;
    this.searchField = _searchField;
    this.label = _label;
    this.toolTip = _toolTip;
    this.type = _type;
    this.inputType = _inputType;
    this.values = _values;
  }
}

export interface ValidationOptions {
  max: number;
  min: number;
  pattern: string;
}

export interface ISearchOperator {
  Operator: string[];
}

export class searchOperators implements ISearchOperator {
  Operator: string[];
}

export class SearchConfig implements ISearchConfig {
  title: string;
  searchTypeKey: string;
  searchFieldGroup: SearchFieldGroup[];
}

let searchConfig: ISearchConfig = new SearchConfig();
searchConfig.searchTypeKey = "Claimant";
searchConfig.searchFieldGroup =
//searchConfig.searchFieldGroup. = [
 //    {
  //       fieldKey = "1", //Field Key must be unique.
  //     "searchField": "FirstName", //The field that the API will search by
  //     "label": "First Name", //The label that appears in the drop down.
  //     "toolTip": "Search by the Claimant's First name", //Tooltip.  Do we need a tooltip.
  //     "type": "string", //The type of field.
  //     "inputType": "input", //The input control type.   TextBox, CheckBox, DatePicker, DropDown, MultiSelect, Customer
  //     "validationOptions": { //Validation of inputs
  //       "max": 99999,
  //       "min": 0,
  //       "pattern": "\\d{5}"
  //     },
  //     "searchOperators": [ //List of operators that can appear in the drop down.
  //       {
  //         "Operator": "Contains"
  //       },
  //       {
  //         "Operator": "Starts With"
  //       },
  //       {
  //         "Operator": "Ends With"
  //       },
  //       {
  //         "Operator": "Equals"
  //       }
  //     ]
