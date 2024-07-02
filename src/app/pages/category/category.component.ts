import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Movie, Actor } from "../../../models/movie";
import { MovieService } from "../../shared/services/movies.service";

@Component({
	selector: "app-category",
	templateUrl: "./category.component.html",
	styleUrl: "./category.component.scss",
})
export class CategoryComponent implements OnInit {
	categorySlug: string = "";
  filteredMovies!: Movie[];
	selectedMovie: Movie | null = null;
	actors!: Actor[];
	isPopupVisible!: boolean;
  private route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private service: MovieService) {
		this.isPopupVisible = false;
		// this.filteredMovies = service.getMoviesByCategory(this.categorySlug);
	}

	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			this.categorySlug = params.get("categorySlug") || "";
			 this.service.getMoviesByCategory(this.categorySlug).subscribe(data => {
        this.filteredMovies = data;
      });
		});
	}

  selectMovie(e: any) {
		e.component.byKey(e.currentSelectedRowKeys[0]).done((movie: Movie) => {
			if (movie) {
				this.selectedMovie = movie;
         this.service.getMovieActors(this.selectedMovie).subscribe( data => {
          this.actors = data;
        });
			}
		});
	}

  togglePopup(): void {
		this.isPopupVisible = !this.isPopupVisible;
	}
}
