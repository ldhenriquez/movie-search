import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query = '';
  movies = [];
  currentPage = 1;
  totalPages = 0;

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void { }

  searchMovies(): void {
    if (!this.query.trim()) return;
    this.movieService.searchMovies(this.query, this.currentPage).subscribe((response: any) => {
      this.movies = response.results;
      this.totalPages = response.total_pages;
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.searchMovies();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.searchMovies();
    }
  }

  goToDetails(movieId: number): void {
    this.router.navigate(['/movie', movieId]);
  }
}
