Contributing to Solo Travel Safety 🤝
Thank you for your interest in contributing to Solo Travel Safety! We're building a platform to help women travel safer, and every contribution matters.
🌟 Ways to Contribute

🐛 Bug Reports: Found a bug? Help us fix it
✨ Feature Requests: Have an idea? We'd love to hear it
💻 Code Contributions: Submit PRs for features or fixes
📝 Documentation: Improve our docs
🎨 Design: UI/UX improvements and design assets
🌍 Translation: Help make STS accessible worldwide
📊 Data: Contribute safety data or research

🚀 Getting Started
Prerequisites

Node.js 18+ and npm
Git
A Supabase account (for local development)
Basic knowledge of React and TypeScript

Local Setup

Fork the repository
bashgit clone https://github.com/yourusername/solo-travel-safety.git
cd solo-travel-safety

Install dependencies
bashnpm install

Set up environment
bashcp .env.example .env.local
# Add your Supabase credentials to .env.local

Start development
bashnpm run dev


📝 Development Guidelines
Code Style
We use ESLint and Prettier for consistent code formatting:
bash# Check linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
Commit Convention
We follow Conventional Commits:

feat: New features
fix: Bug fixes
docs: Documentation changes
style: Code style changes (formatting, etc.)
refactor: Code refactoring
test: Adding or updating tests
chore: Maintenance tasks

Examples:
bashfeat: add safety score visualization component
fix: resolve map rendering issue on mobile
docs: update API documentation for reviews endpoint
Branch Naming

feature/description - New features
bugfix/description - Bug fixes
hotfix/description - Critical fixes
docs/description - Documentation updates

Pull Request Process

Create a feature branch
bashgit checkout -b feature/amazing-new-feature

Make your changes

Write clean, tested code
Follow our coding standards
Update documentation if needed


Test thoroughly
bashnpm run test
npm run test:e2e
npm run lint

Commit your changes
bashgit add .
git commit -m "feat: add amazing new feature"

Push and create PR
bashgit push origin feature/amazing-new-feature

Fill out the PR template

Describe what you changed and why
Link any related issues
Add screenshots for UI changes
Ensure all checks pass



🧪 Testing Guidelines
Writing Tests

Unit tests for utilities and hooks
Component tests for UI components
Integration tests for user flows
E2E tests for critical paths

bash# Run specific test suites
npm run test:unit
npm run test:component
npm run test:integration
npm run test:e2e
Test Coverage
Maintain test coverage above 80%:
bashnpm run test:coverage
🎨 Design Guidelines
Component Development

Use TypeScript for all components
Follow our design system (see docs/DESIGN_SYSTEM.md)
Ensure accessibility (WCAG 2.1 AA)
Test on mobile and desktop

UI/UX Contributions

Follow the brand guidelines
Use the established color palette
Maintain consistent spacing and typography
Consider the target audience (solo female travelers)

📊 Safety Data Contributions
Adding City Data
When contributing safety data:

Ensure accuracy - Only add verified information
Cite sources - Include reliable sources when possible
Follow schema - Use the established database schema
Be objective - Avoid personal opinions, stick to facts

Data Guidelines

Safety scores should be based on verifiable data
Cultural tips should be respectful and helpful
Red flags should be specific and actionable
Emergency information must be current and accurate

🌍 Translation Guidelines
Adding New Languages

Copy src/locales/en.json to src/locales/[lang].json
Translate all strings
Update src/lib/i18n.ts to include the new language
Test the translation thoroughly

Translation Quality

Maintain the brand voice and tone
Ensure cultural appropriateness
Keep safety terminology precise
Test with native speakers when possible

🚫 What We Don't Accept

Discriminatory or offensive content
Unverified safety claims or fear-mongering
Code that doesn't follow our style guidelines
Features that compromise user privacy
Changes without proper testing

🛡️ Security
Reporting Vulnerabilities
DO NOT create public issues for security vulnerabilities.
Instead, email us at: security@solotravelsafety.com
Include:

Description of the vulnerability
Steps to reproduce
Potential impact
Suggested fix (if any)

Security Guidelines

Never commit sensitive data (API keys, passwords)
Follow secure coding practices
Use environment variables for configuration
Validate all user inputs
Implement proper authentication checks

📞 Getting Help
Community Support

Discord: Join our Discord server
GitHub Discussions: Use GitHub Discussions for questions
Email: Contact us at contribute@solotravelsafety.com

Mentorship
New to open source? We offer mentorship for first-time contributors:

Pair programming sessions
Code review guidance
Career advice in tech

Reach out to us at mentor@solotravelsafety.com
🏆 Recognition
Contributors are recognized in:

Our monthly newsletter
Social media shoutouts
Contributors page on the website
Special Discord roles

📋 Issue Templates
When creating issues, please use our templates:

🐛 Bug Report: For reporting bugs
✨ Feature Request: For suggesting new features
📝 Documentation: For documentation improvements
🎨 Design: For UI/UX suggestions

📜 Code of Conduct
Please read and follow our Code of Conduct. We're committed to providing a welcoming and inclusive environment for all contributors.

Thank you for helping make travel safer for women worldwide! 💜
Questions? Reach out at contribute@solotravelsafety.com