# Template Project Folder Structure

This documentation provides an overview of the folder structure used in the Template project. Each folder serves a specific purpose and helps organize the codebase effectively.

## Folder Structure

Explanation of each folder and its purpose:

### `components`

The `components/` folder contains two subdirectories:

- `components/ui/`: Contains shared UI components such as buttons, modals, containers, etc.
- `components/[form]/`: Contains components specific to a particular context, such as forms, which will be used throughout the application.

### `context`

The `context/` folder contains application contexts. Here is an example:

- `context/AuthProvider.tsx`: Defines the AuthProvider that manages authentication-related state.

### `hooks`

The `hooks/` folder contains custom hooks used in the application. Here is an example:

- `hooks/useAuth.tsx`: Provides a custom hook for handling authentication logic.

### `lib`

The `lib/` folder contains integrations with third-party libraries. Here is an example:

- `lib/api.ts`: Handles HTTP requests using the axios library or GraphQL requests using Apollo.

### `pages`

The `pages/` folder contains application pages and server-side functionality provided by Next.js. It also includes a subfolder named `/api/` where you can create server-side APIs.

### `styles`

The `styles/` folder contains global styles for the application, including themes, resets, and global configurations.

### `utils`

The `utils/` folder contains utility functions that can be used throughout the application without being tied to any specific context. Here is an example:

- `utils/formatCurrency.ts`: Provides a utility function for formatting currency values.

Please note that this is a simplified representation of the folder structure, and you would need to create the corresponding files and directories in your project.

Remember to keep your code organized and modular, making it easier to maintain and scale your application.
