import { Component, OnInit } from "@angular/core";
import { Movie, Actor } from "../../../models/movie";
import { MovieService } from "../../shared/services/movies.service";

@Component({
	selector: "app-movies",
	templateUrl: "./movies.component.html",
	styleUrl: "./movies.component.scss",
})
export class MoviesComponent implements OnInit {
	movies!: Movie[];
	selectedMovie: Movie | null = null;
	actors!: Actor[];
	isPopupVisible!: boolean;

	constructor(private service: MovieService) {
		this.isPopupVisible = false;
		// this.movies = service.getMovies();
	}
	ngOnInit(): void {
		this.service.getMovies().subscribe(data => {
			this.movies = data;
		});
	}


	selectMovie(e: any) {
		e.component.byKey(e.currentSelectedRowKeys[0]).done((movie: Movie) => {
			if (movie) {
				this.selectedMovie = movie;
         this.service.getMovieActors(this.selectedMovie).subscribe(data => {
          this.actors = data;
        });
			}
		});
	}

	togglePopup(): void {
		this.isPopupVisible = !this.isPopupVisible;
	}
}
