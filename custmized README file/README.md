
# Movie Rating Platform

A modern, Netflix-inspired movie rating platform built with **Angular**. The application allows users to view trending, theater, and popular movies, and rate them using a dynamic, reusable star rating component. It includes a dark theme, responsive layout, and JSON-based movie data.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Star Rating Component](#star-rating-component)
- [Movie Data (JSON)](#movie-data-json)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Demo

[Insert a link to a live demo or GIF of your project here]

## Features

- **Responsive design** with a modern Netflix-like dark theme.
- **Star rating component**: A reusable star rating component used for movie ratings across the platform.
- **Trending, Theater, and Popular Movies**: Movie data is fetched from local JSON files.
- **Dynamic Rating System**: Users can submit ratings, and finalized ratings are made read-only.
- **Reusable components**: Modular components for flexibility and maintainability.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/movie-rating-platform.git
   cd movie-rating-platform
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   ng serve
   ```

4. **Open the application in your browser**:
   Navigate to `http://localhost:4200/` to see the app in action.

## Usage

Once you’ve installed and run the project:

1. Browse through **Trending**, **Theater**, and **Popular** movies.
2. View the movie details, including the rating, cover image, and description.
3. Use the **star rating component** to rate movies dynamically.
4. Finalize ratings to lock them for specific movies.

## Star Rating Component

The star rating component is designed to be reusable and can be added anywhere in the application. Here’s how you can use it in your project:

### Example usage in a template:

```html
<app-star-rating [rating]="movie.rating" [isReadOnly]="true"></app-star-rating>
```

### Component Inputs:
- `rating`: The current rating for the movie.
- `isReadOnly`: A boolean to lock or unlock the rating functionality.

### Styling:
The component is styled with a modern dark theme and can be customized via SCSS.

## Movie Data (JSON)

Movie data is sourced from local JSON files stored in the `assets/data/` folder. Each JSON file contains structured data for trending, theater, and popular movies. This setup makes it easy to update or replace the movie data as needed.

Example movie data format (`trending-movies.json`):

```json
[
  {
    "id": 1,
    "title": "Movie Title",
    "rating": 4.5,
    "cover": "assets/images/movie-cover.jpg",
    "description": "Movie description here..."
  },
  {
    "id": 2,
    "title": "Another Movie",
    "rating": 3.8,
    "cover": "assets/images/another-movie-cover.jpg",
    "description": "Another movie description..."
  }
]
```

### Files:
- `trending-movies.json`
- `theatre-movies.json`
- `popular-movies.json`

These files are fetched locally using Angular's `HttpClient` and parsed into the application.

## Technologies

This project leverages the following technologies:

- **Angular** (Version X)
- **TypeScript**
- **Bootstrap** (For UI components)
- **SCSS** (For styling)
- **RxJS** (For handling asynchronous data)
- **Angular Router** (For navigation)
- **Local JSON** files for movie data

## Folder Structure

Here’s an overview of the folder structure for this project:

```
movie-rating-platform/
├── src/
│   ├── app/
│   │   ├── components/        # Reusable components like the Star Rating component
│   │   ├── services/          # Services for fetching movie data from JSON files
│   │   ├── pages/             # Pages like Home, Movie Details, etc.
│   │   ├── app.component.ts   # Main component
│   │   ├── app.module.ts      # Root module
│   └── assets/                # Static assets like images, JSON files
│       └── data/              # JSON files containing movie data
├── README.md                  # This README file
├── package.json               # Dependencies and scripts
└── angular.json               # Angular configuration
```

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with a clear message.
4. Push to your branch and create a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
