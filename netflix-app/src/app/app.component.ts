import { Component } from '@angular/core';
import { Media } from './interfaces/media';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';
public topTenFilms = {
  section: "Top Ten",
  films: [{
    title: "La Casa de Papel",
    image: "./assets/images/Top10/1-papel.webp"
    },
    {
    title: "La Reina del Flow",
    image: "./assets/images/Top10/2-reina.webp"
    },
    {
    title: "Titanes",
    image: "./assets/images/Top10/3-titanes.webp"
    }

  ]
}
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
    title: "Ejercito de los Muertos",
    image: "./assets/images/Accion/ejercitomuertos.jpg"
  
  },{
    title: "El Protector",
    image: "./assets/images/Accion/elprotector.webp"
    
  },{
    title: "Equalizer 2",
    image: "./assets/images/Accion/equalizer2.webp"
      
  }]
}

public dramaFilms = {
  section: "Drama",
  films: [{
    title: "1917",
    image: "./assets/images/Drama/1917.webp"
  },
  {
  title: "arrival",
  image: "./assets/images/Drama/arrival.webp"
  },
  {
  title: "clublucha",
  image: "./assets/images/Drama/clublucha.webp"
  }]
}

public animeFilms = {
  section: "Anime",
  films: [{
  title: "Ajin",
  image: "./assets/images/Anime/ajin.jpg"
  },
  {
    title: "El Castillo Ambulante",
    image: "./assets/images/Anime/castilloambulante.webp"
  },
  {
    title: "El Viaje de Chihiro",
    image: "./assets/images/Anime/chihiro.webp"
  }
]
}

public terrorFilms = {
  section: "Terror",
  films: [
    {
  title: "El Apóstol",
  image: "./assets/images/Terror/apostol.jpg"
  },
  {
    title: "La Calle del Terror, parte 2: 1978",
    image: "./assets/images/Terror/calleterror.jpg"
  },
  {
    title: "Infierno bajo el agua",
    image: "./assets/images/Terror/infiernoagua.webp"
  },
  ]
}

public scifiFilms = {
  section: "Scifi",
  films: [
  {
  title: "El 6º día",
  image: "./assets/images/Sci-fi/6dia.webp"
  },
  {
  title: "12 Monos",
  image: "./assets/images/Sci-fi/12monos.webp"
  },
  {
  title: "After Earth",
  image: "./assets/images/Sci-fi/afterearth.webp"
  }
]
}

}

