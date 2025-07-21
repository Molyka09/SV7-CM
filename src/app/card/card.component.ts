import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  list = [
    {
      termfiles: 'https://tse4.mm.bing.net/th/id/OIP.j_wnXBTgGCm7utxmpadmlgHaKk?rs=1&pid=ImgDetMain&o=7&rm=3',
      title: 'Reacher season 3',
      term: 'TV Series • 2022-2025 • TV-MA',
      storyline: 'Itinerant former military policeman Jack Reacher solves crimes and metes out his own brand of street justice. Based on the novels by Lee Child.',
      genres: 'Action & Adventure, Drama, Crime, Mystery & Thriller',
      rating: '8.0 (269k)'
    },
    {
    termfiles: 'https://tse4.mm.bing.net/th/id/OIP.m4MVaAtymXYL3Qlo_qKfKwHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3',
    title: 'F1 The Movie (2025)',
    term: '2025 • 2h 35m • PG-13',
    storyline: 'A Formula One driver comes out of retirement to mentor and team up with a younger driver.',
    genres: 'Action & Adventure, Drama, Sport, Sports Drama',
    rating: '7.9 (33K)'
    },
    {
    termfiles: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Ballerina_%282025_film%29_poster.jpg',
    title: 'Ballerina',
    term: '2025 • 2h 4m • R',
    storyline: "An assassin trained in the traditions of the Ruska Roma organization sets out to seek revenge after her father's death.",
    genres: 'Mystery & Thriller, Crime, Action & Adventure, Action Thriller',
    rating: '7.2 (37K)'
    },
    {
    termfiles: 'https://www.whats-on-netflix.com/wp-content/uploads/2025/01/en_us_sg-s3_main_non25_the_drag_flowers_unsafe_4_x_5_v_1080px1350p_rgb_pre_1.jpg.webp',
    title: 'Squid Game',
    term: 'TV Series • 2021-2025 • TV-MA',
    storyline: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. A tempting prize awaits, but with deadly high stakes.",
    genres: 'Action & Adventure, Mystery & Thriller, Drama, Crime',
    rating: '8.0 (677K)'
    },
    // {
    // termfiles: 'https://tse2.mm.bing.net/th/id/OIP.ZYy4PwNHlPAS5_EPdkyDjAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
    // title: 'The Witcher',
    // term: 'TV Series • 2019-Present • TV-MA',
    // storyline: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    // genres: 'Drama, Science-Fiction, Fantasy, Epic Fantasy, Action Adventure',
    // rating: '7.9 (597K)'
    // },
  ];
}
