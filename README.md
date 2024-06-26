# SavageDB

A simple visual database I thought up while watching Adam Savage on the Tested youtube channel.

The idea for this project started here. as much as I love a simple printed excel sheet list I think we can do better, and make the process of labeling easier and more helpful when searching for something in particular.

[Adam Savage Builds His Dream Hardware Storage System!](https://youtu.be/PXfg4Qib-5I?si=dhoDJwQGBX5icFNP&t=2364)

What if you could simply label a picture directly and store that in a database? Something like :
```
   {
  "image": {
    "id": 1,
    "url": "https://example.com/path/to/image.jpg",
    "title": "A Sample Image",
    "description": "This is a sample description of the image."
        }
   }

   {
  "labels": [
    {
      "id": 1,
      "image_id": 1,
      "label_text": "Label 1",
      "x_position": 50,
      "y_position": 100,
      "width": 120,
      "height": 60
    },
    {
      "id": 2,
      "image_id": 1,
      "label_text": "Label 2",
      "x_position": 200,
      "y_position": 150,
      "width": 150,
      "height": 75
    }
  ]
}  
```
## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Getting Started

This section provides a quick start guide to get the development environment running.

### Prerequisites

Before you begin, ensure you have met the following requirements:
- Ruby version 3.2.2
- Rails version 7.1.3.2
- PostgreSQL, Node.js

### Setup

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/topher-nullset/SavageDB.git
   cd <AppName>
   ```
2. Install dependencies:
   ```bash
   bundle install
   npm install
   ```
3. Setup database:
   ```bash
   rails db:create db:migrate db:seed
   ```

### Running the Application

To run SavageDB locally, follow these steps:

```bash
rails server
```

Visit `http://localhost:3000` in your browser to view the app.

### Testing

Explain how to run the automated tests for this system:
```bash
bundle exec rspec
```

## Contributing

We welcome contributions to <AppName>! Here's how you can help:

1. Fork the repo.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for more details on our code of conduct and the process for submitting pull requests to us.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Chris C. - [@ChrisCullinane6](https://twitter.com/ChrisCullinane6) - chriscullinane@protonmail.com

Project Link: [https://github.com/<your-username>/<AppName>](https://github.com/<your-username>/<AppName>)

