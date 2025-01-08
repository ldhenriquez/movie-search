import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.params['id'];
    this.movieService.getMovieDetails(movieId).subscribe((response: any) => {
      this.movie = response;
    });
  }
}
