import { inject, Injectable } from "@angular/core";
import { Actor, Movie } from "../../../models/movie";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

// const movies: Movie[] = [];

@Injectable({
	providedIn: "root",
})
export class MovieService {
  apiUrl = "https://rest-api.monacodelisa.dev/api/movies";
	private http: HttpClient = inject(HttpClient);

	getMovies(): Observable<Movie[]> {
		return this.http.get<Movie[]>(
			// "https://monacodelisa-node-express.cyclic.app/api/movies"
			this.apiUrl
		);
	}

	getMovieActors(selectedMovie: Movie): Observable<Actor[]> {
		return this.http
			.get<Movie[]>(this.apiUrl)
			.pipe(
				map((movies: Movie[]) => {
					const foundMovie = movies.find(
						(movie) => movie.name === selectedMovie.name
					);
					return foundMovie ? foundMovie.actors : [];
				})
			);
	}

	getMoviesByCategory(categorySlug: string): Observable<Movie[]> {
		return this.http
			.get<Movie[]>(this.apiUrl)
			.pipe(
				map((movies: Movie[]) => {
					const lowerCaseSlug = categorySlug.toLowerCase().split(" ").join("-");
					return movies.filter(
						(movie) =>
							movie.category.toLowerCase().split(" ").join("-") ===
							lowerCaseSlug
					);
				})
			);
	}
}
