import { Component } from '@angular/core';
import { Media } from './interfaces/media';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';
public comedyFilms = {
    section: "Comedia",
    films: [{
      title: "Casi 300",
      image: "./assets/images/Comedia/casi300.webp"
    },{
    title: "Cazafantasmas",
      image: "./assets/images/Comedia/cazafantasmas.webp"
    },{
    title: "Dictador",
    image: "./assets/images/Comedia/dictador.webp"
    }]
  
    
  }

public actionFilms = {
  section: "Action",
  films: [{
  title: "Titulo",
  image: "Imagen"
  
  }]
}

public dramaFilms = {
  section: "Drama",
  films: [{
    title: "1917",
    image: "./assets/images/Drama/1917.webp"
  },{
  title: "arrival",
  image: "./assets/images/Drama/arrival.webp"
  },{
  title: "clublucha",
  image: "./assets/images/Drama/clublucha.webp"
  }]
}

public animeFilms = {
  section: "Anime",
  films: [{
  title: "Titulo",
  image: "Imagen"
  }]
}

public terrorFilms = {
  section: "Terror",
  films: [{
  title: "Titulo",
  image: "Imagen"
  }]
}

public scifiFilms = {
  section: "Scifi",
  films: [{
  title: "Titulo",
  image: "Imagen"
  }]
}
public topTenFilms = {
  section: "Top Ten",
  films: [{
    title: "Titulo",
    image: "Imagen"
    }

  ]
}
}

