# Deliverable / Rubric - Project Activity 4

## Features implemented from backlog
1. REST API for items (CRUD - partial implemented: read + create)
2. Automated test suite for API endpoints
3. CI pipeline using GitHub Actions to run tests on push/PR

## Objectives
- Ensure each commit / PR runs automated tests to prevent regressions
- Provide quick feedback to developers via CI status
- Gate merges until tests pass

## Why chosen
- Small, testable feature set that demonstrates CI/CD benefits
- High value: prevents backend regressions and improves team confidence

## Team roles (sample)
- Frontend / Integration:  — React & UI work
- Backend / API:  — Node.js & Express
- QA / Tests:  — Jest testing and test design
- DevOps:  — CI/CD and workflow automation

## Strategy
- Feature branches -> PRs -> Automated tests run -> Merge only if green
- Use codeowners / reviewers for manual checks + CI as guard
