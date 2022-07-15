import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  @Output() countryToSearch = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onSearchCountry = () => {
    this.countryToSearch.emit(this.searchTerm);
  };
}
