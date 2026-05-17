# Contributing to Lab Test Report Analyzer

Thank you for your interest in contributing! We welcome contributions from the community.

## Code of Conduct

Please be respectful and constructive in your interactions with other contributors.

## How to Contribute

### Reporting Bugs
1. Check existing issues to avoid duplicates
2. Create a detailed issue with:
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Suggesting Features
1. Check existing feature requests
2. Describe the feature and its benefits
3. Provide use cases if possible

### Code Contributions
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Follow the code style guidelines
4. Write tests for new functionality
5. Commit with clear messages
6. Push to your fork
7. Create a Pull Request

## Development Setup

```bash
git clone https://github.com/yourusername/lab-test-analyzer.git
cd lab-test-analyzer
cp .env.example .env
docker-compose up -d
```

## Code Style

- Use ESLint configuration
- Follow React and Node.js best practices
- Write clear, descriptive variable names
- Add comments for complex logic
- Keep functions small and focused

## Testing

Before submitting:
```bash
npm test
npm run lint
npm run build
```

## Commit Messages

- Use clear, descriptive commit messages
- Start with verb (Add, Fix, Update, etc.)
- Example: `Add OCR support for medical documents`

## Questions?

Open an issue or contact us at support@labtestanalyzer.com

Thanks for contributing! 🎉
