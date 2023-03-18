# Contributing to Sum

We welcome contributions to the Sum project! This document provides guidelines and instructions to help you contribute effectively.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Setting Up Your Development Environment](#setting-up-your-development-environment)
- [Submitting Changes](#submitting-changes)
  - [Large Changes](#large-changes)
- [Contributing as a Non-Coder](#contributing-as-a-non-coder)
- [Reporting Issues](#reporting-issues)

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a positive and inclusive environment for all our contributors.

## Getting Started

To begin contributing to Sum, follow these steps:

1. Fork the repository: https://github.com/schibsted/sum
2. Clone your fork locally.
3. Create a new branch for your changes.

## Setting Up Your Development Environment

To set up your development environment, follow these steps:

1. Ensure you have Node.js installed. We recommend using the the version specified in the [`.nvmrc`](.nvmrc) file.
2. Install the project dependencies by running `npm install`.
3. Create a `.env` file in the root of the project and configure the required environment variables. Refer to the [README.md](README.md) file for details on environment variables.
4. Run the development server by executing `npm run dev`.
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Submitting Changes

When you are ready to submit your changes, follow these steps:

1. Ensure your changes adhere to the project's coding style and pass any existing tests.
2. Commit your changes with a clear and descriptive commit message.
   - Preferably following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages.
3. Push your changes to your fork on GitHub.
4. Open a pull request to the `main` branch of the original Sum repository. Provide a detailed description of your changes, including the problem you're solving or the feature you're implementing.
5. Wait for feedback from maintainers. They will review your pull request and provide comments or request changes if necessary. Be prepared to engage in a constructive discussion to improve your contribution.

If you are new to contributing to open source projects, we recommend reading [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/).

### Large Changes

For significant code rewrites, major changes in technologies used, or substantial user experience modifications, we recommend opening an issue first to discuss your proposal. This allows the community and maintainers to provide feedback and input on your ideas before you invest a considerable amount of time and effort into implementing them.

By discussing your ideas with the community in advance, you increase the likelihood of your changes being accepted and help ensure that the project continues to evolve in a way that benefits all users.

## Contributing as a Non-Coder

We appreciate contributions from non-coders as well! If you don't have coding skills or prefer not to contribute code, there are still many ways you can help improve the Sum project:

- **Designs:** If you have design skills, feel free to submit mockups, UI/UX improvements, or visual assets that can enhance the project's appearance and usability.
- **Feedback:** Your feedback on the project's functionality, user experience, or documentation can be invaluable for making improvements. Don't hesitate to share your thoughts and experiences.
- **Ideas:** Have a great idea for a new feature or an improvement to existing functionality? We'd love to hear it! Open an issue to describe your idea and explain how it can benefit the project.
- **Prompts:** Help us create better prompts to improve the performance of ChatGPT within Sum. Share your ideas for prompts or suggest improvements to existing ones.
- **Translations:** If you're fluent in a language other than English, consider contributing translations for the project's interface, documentation, or other text resources. This can help make Sum more accessible to a broader audience.

To contribute in any of these ways, simply open an [issue](https://github.com/schibsted/sum/issues) in the Sum repository and provide a clear description of your contribution. Be sure to include any relevant information or files to help us understand and integrate your ideas.

## Reporting Issues

If you encounter a bug or have a feature request, please create an issue in the [Sum repository](https://github.com/schibsted/sum/issues). Provide a clear description of the problem or the desired feature, and include any relevant information to help us understand and address the issue.

Thank you for your interest in contributing to Sum! Your contributions will help improve the project and benefit the community.
