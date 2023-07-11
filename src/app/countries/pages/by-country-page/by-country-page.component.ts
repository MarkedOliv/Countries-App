import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent implements OnInit{
  constructor(private readonly countriesService: CountriesService) {}

  public countries: Country[] = [];
  public initialValue: string = '';
  public isLoading: boolean = false;

  searchByCountry(term: string): void {

    this.isLoading = true;

    this.countriesService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    })
  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries
    this.initialValue = this.countriesService.cacheStore.byCountries.term
  }
}
