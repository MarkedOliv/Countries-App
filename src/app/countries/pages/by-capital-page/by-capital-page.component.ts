import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent implements OnInit {
  constructor(private readonly countriesService: CountriesService) {}

  public countries: Country[] = [];
  public initialValue: string = '';
  public isLoading: boolean = false;

  searchByCapital(term: string): void {

    this.isLoading = true;

    this.countriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    })
  }
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries
    this.initialValue = this.countriesService.cacheStore.byCapital.term
  }
}
