# Proj4 CI/CD Sample

This sample Node.js Express application demonstrates:
- Basic REST endpoints (/api/items)
- Automated tests with Jest + Supertest
- GitHub Actions workflow that runs tests on each push / PR

## How to run locally
1. Install Node.js (18 or 20)
2. npm install
3. npm test
4. npm start

## CI/CD (GitHub Actions)
The workflow `.github/workflows/ci.yml` runs on pushes and pull requests to `main` or `master`.
It performs:
- checkout
- install (npm ci)
- lint (eslint)
- tests (npm test)

## What to submit for the Project Activity
- Application code (this repo)
- Test cases (see tests/api.test.js)
- CI/CD pipeline (see .github/workflows/ci.yml)
- Presentation and team reflections (see docs/)
