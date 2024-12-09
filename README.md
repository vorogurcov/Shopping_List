# Minilab224 task
## Variant 1

# Unsplash & Jokes API Aggregator

## Project Overview

This application provides endpoints for fetching random photos and paginated photos from Unsplash, as well as random jokes from the Official Joke API. The service is built using Python and FastAPI, designed to handle API integration seamlessly.

## Features

- Fetch a random photo from Unsplash.
- Retrieve a page of Unsplash photos.
- Get a random joke from the Official Joke API.

---

## API Endpoints Documentation

### Unsplash Endpoints

#### 1. `GET /random`
Fetches a random photo from Unsplash.

- **URL**: `/random`
- **Method**: GET
- **Response**:
  - Success (200):
    ```json
    {
        "id": "photo_id",
        "created_at": "2024-01-01T00:00:00Z",
        "urls": {
            "full": "photo_url",
            "regular": "photo_url"
        },
        "user": {
            "name": "Photographer Name"
        }
    }
    ```
  - Unauthorized (401):
    ```json
    {
        "status": 401,
        "message": "Ай-ай-ай, неверный токен авторизации!"
    }
    ```

#### 2. `GET /photos`
Fetches a paginated list of photos from Unsplash.

- **URL**: `/photos`
- **Method**: GET
- **Response**:
  - Success (200): Array of photo objects similar to `/random`.
  - Unauthorized (401): Same as `/random`.

---

### Jokes Endpoints

#### 3. `GET /random`
Fetches a random joke.

- **URL**: `/random`
- **Method**: GET
- **Response**:
  - Success (200):
    ```json
    {
        "type": "general",
        "setup": "Why don't skeletons fight each other?",
        "punchline": "They don't have the guts."
    }
    ```
  - Unauthorized (401):
    ```json
    {
        "status": 401,
        "message": "Ай-ай-ай, неверный токен авторизации!"
    }
    ```

---

## Installation and Configuration
The app was tested using Python 3.9.13 and packages from requirements.txt

### Prerequisites

1. **Python 3.9.13**
2. **pip** package manager
3. **FastAPI and dependencies** installed (see below)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/vorogurcov/minilab2
    cd your-repository
    ```

2. Create virtual environment inside backend folder:
    ```bash
    cd backend
    py -m venv venv
    ```
    
3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Run the main.py from the root of the project:
    ```bash
    cd .. #if you are in backend folder
    py backend/main.py
    ```

5. Access the API Swagger UI at:
    - [http://127.0.0.1:5000/docs](http://127.0.0.1:8000/docs)

---

## Application Logic

1. **Unsplash API Integration**:
   - The `GET /random` endpoint fetches a random photo from Unsplash using the `/photos/random` endpoint of Unsplash's API.
   - The `GET /photos` endpoint retrieves a page of photos from Unsplash's `/photos` endpoint.
   - Both endpoints use the `client_id` as authentication, which must be provided as an environment variable (`UNSPLASH_API_TOKEN`).

2. **Joke API Integration**:
   - The `GET /random` endpoint interacts with the Official Joke API to fetch a random joke.

---

## Postman Workspace

A Postman workspace has been created to demonstrate the API functionality. It includes the following:

1. Pre-configured environment variables:
    - `{{base_url}}` for the local server URL.
    - `{{unsplash_api_token}}` for the Unsplash API token.
    - `{{URL_PREFIX}}` for the predefined '/api/v1' path
2. Requests for each endpoint:
    - `GET /random` (Unsplash)
    - `GET /photos` (Unsplash)
    - `GET /random` (Jokes)

**Access the Postman workspace here**: [Postman Workspace Link](https://www.postman.com/spaceflight-geologist-43185237/minilab2)
To properly use it choose the Local API environment
---

