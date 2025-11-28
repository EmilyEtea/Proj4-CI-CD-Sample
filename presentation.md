# Presentation - Proj4 CI/CD Sample

## Slide 1 - Title
Proj4 CI/CD Sample — Automated Testing & GitHub Actions

## Slide 2 - New Features
- Items API (GET, POST)
- Test suite to validate behavior

## Slide 3 - Test Cases
- GET /api/items returns array
- GET /api/items/:id returns 200 or 404
- POST /api/items creates item or returns 400

## Slide 4 - CI/CD Pipeline
- On push / PR -> run npm ci, lint, npm test
- Merge only after passing tests (use branch protection in GitHub)

## Slide 5 - Reflections
- Lessons learned and next steps (add e2e tests, deploy to cloud)
