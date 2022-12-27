import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Panda } from '../interfaces/panda';
import { PandaService } from '../services/panda.service';

@Component({
  templateUrl: './panda-list.component.html',
  styleUrls: ['./panda-list.component.scss'],
})
export class PandaListComponent implements OnInit {
  public filterTerm: string = '';
  public pandas: Panda[];
  public filteredPandas!: Panda[];
  constructor(pandaService: PandaService, private route: ActivatedRoute) {
    this.pandas = pandaService.getPandas();
    this.filteredPandas = this.pandas;
  }

  ngOnInit(): void {
    // Statically reading parameter
    // this.filterTerm =
    //    this.route.snapshot.queryParamMap.get('filterTerm') ?? '';
    // this.onFilterTermChange(this.filterTerm);

    // Listening to changes
    this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.filterTerm = paramMap.get('filterTerm') ?? '';
      this.onFilterTermChange(this.filterTerm);
    });
  }

  onFilterTermChange(filterTerm: string): void {
    this.filterTerm = filterTerm;
    if (filterTerm) {
      this.filteredPandas = this.pandas.filter((panda) =>
        panda.name.toLowerCase().includes(filterTerm.toLowerCase())
      );
    } else {
      this.filteredPandas = this.pandas;
    }
  }
}
