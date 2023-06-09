# Project REST-Rant

REST-Rant is an app where users can review restaurants.

### Route Planning

| Method    | Path | Purpose |
|-----------|---------------------------|-----------------------------------------------|
| GET       | /                         | Hompage                                       |
| GET       | /places                   | Places index page                             |
| POST      | /places                   | Create new place                              |
| GET       | /places/new               | Form page for creating a new place            |
| GET       | /places/:id               | Details about a particular place              |
| PUT       | /places/:id               | Update a particular place                     |
| GET       | /places/:id/edit          | Form page for editing existing place          |
| DELETE    | /places/:id               | Delete a particular place                     |
| POST      | /places/:id/rant          | Create a rant about a particular place        |
| DELETE    | /places/:id/rant/:rantId  | Delete a rant about a particular place        |
| GET       | *                         | 404 page                                      |

### Data Planning

| Name              | City         | State | Cuisine    | Picture |
|-------------------|--------------|-------|------------|---------|
| Birds of a Feather| New York City| NY    | Chinese    | NY.png  |
| Shun              | Houston      | TX    | Japanese   | TX.png  |
| The Little Door   | Los Angeles  | CA    | French     | CA.png  |
| Communion         | Seattle      | WA    | Soul Food  | WA.png  |
| Sam's Burger Joint| San Antionio | TX    | American   | IL.png  |