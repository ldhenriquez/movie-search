import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  cast: any[] = [];

  imageUrl: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.params['id'];
    this.movieService.getMovieDetails(movieId).subscribe((response: any) => {
      this.movie = response;
    });
    this.movieService.getMovieCredits(movieId).subscribe((response: any) => {
      this.cast = response.cast.slice(0, 10); // Mostrar solo los primeros 10 actores
    });
  }

  goBack(): void {
    window.history.back();
  }

}
